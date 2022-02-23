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
        setErrorHandler, web3 } = useContext(AppContext);

    const cookieName = 'wallet';
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    // call api get balance/devaddress/status
    async function connect() {
        try {
            const address = await WalletUlti().ConnectMetamask();
            // hiep => {balance,devnet}
            // { cookie, balance } devnet
            setCookie(cookieName, address, {
                maxAge: 3600 * 24 * 3,
                path: '/',
            })
            setUserAddress(address);
            // fetch('https://pickluck.amazingtech.vn/api/wallet/connect', {
            //     method: "POST",
            //     headers: {
            //         'Content-type': 'application/json-patch+json',
            //         'accept': '*/*',
            //         "Access-Control-Allow-Origin": "*"
            //     },
            //     body: JSON.stringify({
            //         // addressKey: (address as Array<string>)[0],
            //         'addressKey': '0x0224a83566B10A8cb59d861236a49381cBd9404E',
            //         'parent': 'master',
            //     })
            // })
            //     .then(response => {
            //         console.log(response)
            //         if (!response.ok) {
            //             throw new Error('Network response was not OK');
            //         }
            //         // setUserAddress(address);
            //         // setCookie(cookieName, address, {
            //         //     maxAge: 3600 * 24 * 3,
            //         //     path: '/',
            //         // })

            //         return response.body;
            //         // return response.json();
            //     })
            //     .then(data => {
            //         // setUserSolanaAccount(data.publicKey)
            //         console.log(data);
            //     })
            //     .catch(error => {
            //         setErrorHandler(ErrorHandler(error));
            //     });
        } catch (error) {
            setErrorHandler(ErrorHandler(error));
        }
    }

    async function disconnect() {
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