/* eslint-disable react/no-children-prop */
import react, { createContext, useEffect, useState } from 'react'
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useCookies } from 'react-cookie'
import Web3 from 'web3';

export const AppContext = createContext(null);

export default function AppProvider(props: { children: boolean | react.ReactChild | react.ReactFragment | react.ReactPortal; }) {
    // Array of address in wallet
    const [userAddress, setUserAddress] = useState<any>();
    const [userBalance, setUserBalance] = useState<any>('0')
    const [userSolanaAccount, setUserSolanaAccount] = useState<any>()
    const [playTogether, setPlayTogether] = useState<any>()
    const [errorhandler, setErrorHandler] = useState<any>();
    const [connection, setConnection] = useState<null | HubConnection>(
        new HubConnectionBuilder()
            .withUrl(process.env.NEXT_PUBLIC_API_SIGNALR, {
                skipNegotiation: true,
                transport: 1
            })
            .withAutomaticReconnect()
            .build()
    );

    const cookieName = 'wallet';
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    useEffect(() => {
        (window as any).ethereum.on('accountsChanged', function (accounts: any) {
            if (accounts.length === 0) {
                setUserAddress(null)
            } else {
                setUserAddress(accounts)
                // call (addressplayer) hiep => devnet, balance
                // { cookie, balance } devnet
            }
        })
    })

    useEffect(() => {
        if (cookies.wallet) {
            (window as any).ethereum.request({
                method: "eth_requestAccounts",
                params: [
                    {
                        eth_accounts: {}
                    }
                ]
            }).then((data: any) => {
                setCookie(cookieName, data, {
                    maxAge: 3600 * 24 * 3,
                    path: '/',
                })
                setUserAddress(data);
            })
        }
    }, [])

    useEffect(() => {
        connection.onreconnected(() => {
            console.log('reconnected')
        })
        connection.on("JoinGroup", (data) => {
            console.log('join:  ', data)
        });
        connection.on("Balance", (data) => {
            setUserBalance(data);
            setCookie(cookieName, { address: userAddress, balance: data }, {
                maxAge: 3600 * 24 * 3,
                path: '/',
            });
        });
        if (connection.state === 'Disconnected') {
            connection
                .start()
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [connection, setCookie, userAddress]);

    return (
        <AppContext.Provider value={{
            userAddress,
            setUserAddress, userBalance, setUserBalance, userSolanaAccount, setUserSolanaAccount,
            playTogether, setPlayTogether, errorhandler, setErrorHandler, connection, setConnection,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}