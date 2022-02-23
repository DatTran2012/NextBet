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
    const [connection, setConnection] = useState<null | HubConnection>(null);
    const [web3, setWeb3] = useState<Web3>(null)

    const cookieName = 'wallet';
    const [cookies, setCookie, removeCookie] = useCookies([cookieName]);

    useEffect(() => {
        const connect = new HubConnectionBuilder()
            .withUrl("https://pickluck.amazingtech.vn/hub/signalr", {
                skipNegotiation: true,
                transport: 1
            })
            .withAutomaticReconnect()
            .build();

        setConnection(connect);
    }, []);

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
    })

    useEffect(() => {
        const provider = new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_ENDPOINT));
        setWeb3(provider);
    }, [])

    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    connection.on("JoinGroup", (name) => {
                        console.log('join')
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [connection]);

    return (
        <AppContext.Provider value={{
            userAddress,
            setUserAddress, userBalance, setUserBalance, userSolanaAccount, setUserSolanaAccount,
            playTogether, setPlayTogether, errorhandler, setErrorHandler, connection, setConnection,
            web3, setWeb3
        }}>
            {props.children}
        </AppContext.Provider>
    )
}