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
        setErrorHandler, connection } = useContext(AppContext);

    const cookieName = 'wallet';
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    // call api get balance/devaddress/status
    async function connect() {
        try {
            const address = await WalletUlti().ConnectMetamask();
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
                    'parent': 'master',
                })
            })
                .then(response => {
                    console.log(response)
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    return response.json();
                })
                .then((data) => {
                    // call balance from socket
                    connection.invoke("Balance",).then(async (balance: any) => {
                        // { cookie, balance } devnet
                        setCookie(cookieName, { address: address, balance: balance }, {
                            maxAge: 3600 * 24 * 3,
                            path: '/',
                        });
                        connection.invoke('JoinGroup', address[0]).then(() => {
                            console.log('joingroup');
                            const message = { addressKey: address[0], Balance: parseFloat(userBalance) }
                            connection.invoke('Balance', message);
                        });
                        setUserAddress(address);
                        setUserSolanaAccount(data.data.solAddress)
                    }).catch((error: any) => {
                        console.log(error);
                        setErrorHandler(ErrorHandler(error));
                    });
                })
                .catch(error => {
                    console.log(error);
                    setErrorHandler(ErrorHandler(error));
                });
        } catch (error) {
            console.log(error);
            setErrorHandler(ErrorHandler(error));
        }
    }

    async function disconnect() {
        connection.invoke('LeaveGroup', userAddress[0])
        removeCookie(cookieName, { path: '/' });
        setUserAddress(null);
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
                    <h5>{userAddress ? userBalance : 0}</h5>
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