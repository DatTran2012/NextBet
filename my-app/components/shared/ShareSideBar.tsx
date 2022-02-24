import { ErrorHandler, getTxhash, subaddress } from "../../utils/Ultis";
import { FC, useContext, useState } from "react"
import WalletUlti from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";
import { endpoints } from "./Endpoint";
import { Snackbar } from "@mui/material";
import { useCookies } from 'react-cookie';
import axios from "axios";

export const ShareSidebar: FC = () => {
    const { userBalance, userAddress,
        setUserAddress, setUserBalance,
        setUserSolanaAccount, errorhandler,
        setErrorHandler, connection,
        setPlayTogether } = useContext(AppContext);

    const cookieName = ['wallet', 'devaddress', 'playtogether'];
    const [cookies, setCookie, removeCookie] = useCookies(cookieName);

    // call api get balance/devaddress/status
    async function connect() {
        try {
            // WalletUlti().ConnectMetamask().then(address => {
            WalletUlti().AutoConnect().then(address => {
                // hiep => {balance,devnet}
                fetch(process.env.NEXT_PUBLIC_API_CONNECT, {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json-patch+json',
                        'accept': '*/*',
                        "Access-Control-Allow-Origin": "*"
                    },
                    body: JSON.stringify({
                        addressKey: (address as Array<string>)[0],
                        parent: 'master',
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not OK');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // join group socket
                        connection.invoke('JoinGroup', address[0]).then(() => {
                            // get balance socket
                            const message = { addressKey: address[0], Balance: parseFloat(userBalance) }
                            connection.invoke('Balance', message).then(() => {
                                setUserAddress(address);
                                setCookie(cookieName[1], data.data.solAddress, { path: '/', maxAge: 3600 * 24 * 3 })
                                setUserSolanaAccount(data.data.solAddress)
                            }).catch((error: any) => {
                                setErrorHandler(ErrorHandler(error));
                            });

                        });
                    })
                    .catch(error => {
                        setErrorHandler(ErrorHandler(error));
                    });
            });
        } catch (error) {
            setErrorHandler(ErrorHandler(error));
        }
    }

    async function disconnect() {
        try {
            connection.invoke('LeaveGroup', userAddress[0])
            removeCookie(cookieName[0], { path: '/' });
            removeCookie(cookieName[1], { path: '/' });
            removeCookie(cookieName[3], { path: '/' });
            setUserAddress('');
            setUserBalance('0');
            setUserSolanaAccount('');
            setPlayTogether('');
        } catch (error) {
            setErrorHandler(ErrorHandler(error));
        }
    }

    return (
        <div className="dashboard-sidebar">
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: 'right' }}
                open={errorhandler ? true : false}
                autoHideDuration={3000}
                onClose={() => setErrorHandler(null)}
                key={"top" + "right"}
            >{errorhandler}</Snackbar>
            <div className="balance">
                <div className="single-item">
                    <img src="assets/images/icon/dashboard-sidebar-icon-1.png" alt="images" />
                    <h5>{userBalance}</h5>
                    {userAddress ? <p>Available Balance</p> :
                        <button onClick={() => connect()} className="cmn-btn">Connect Wallet</button>}
                    {userAddress && <button onClick={() => disconnect()} className="cmn-btn mt-3">Disconnect</button>}
                </div>
                <div className="bottom-area d-flex align-items-center justify-content-between">
                    {userAddress ? <p>{subaddress(userAddress[0])}</p> : null}
                </div>
            </div>
        </div>
    )
}