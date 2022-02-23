import { ErrorHandler, getTxhash, subaddress } from "../../utils/Ultis";
import { FC, useContext, useState } from "react"
import WalletUlti from "../../utils/Wallet";
import { AppContext } from "../context/AppContext";
import { endpoints } from "./Endpoint";
import { Snackbar } from "@mui/material";
import { useCookies } from 'react-cookie'

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
            const address = await WalletUlti().ConnectMetamask()

            fetch(process.env.NEXT_PUBLIC_PICKLUCK + endpoints.pickluck.connect.route, {
                method: endpoints.pickluck.connect.method,
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    addressKey: (address as Array<string>)[0],
                    parent: 'test'
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    setUserAddress(address);
                    setCookie(cookieName, address, {
                        maxAge: 3600 * 24 * 3,
                        path: '/',
                    })
                    return response.json();
                })
                .then(data => {
                    // setUserSolanaAccount(data.publicKey)
                    console.log(data);
                })
                .catch(error => {
                    setErrorHandler(ErrorHandler(error));
                });
        } catch (error) {
            setErrorHandler(ErrorHandler(error));
        }
    }

    async function disconnect() {
        await WalletUlti().DisconnectMetaMask();
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
                    {userAddress && <p>{subaddress(userAddress[0])}</p>}
                </div>
            </div>
        </div>
    )
}