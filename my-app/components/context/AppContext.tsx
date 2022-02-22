/* eslint-disable react/no-children-prop */
import react, { createContext, useEffect, useState } from 'react'
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

export const AppContext = createContext(null);

export default function AppProvider(props: { children: boolean | react.ReactChild | react.ReactFragment | react.ReactPortal; }) {
    const [userAddress, setUserAddress] = useState<any>();
    const [userBalance, setUserBalance] = useState<any>('0')
    const [userSolanaAccount, setUserSolanaAccount] = useState<any>()
    const [playTogether, setPlayTogether] = useState<any>()
    const [errorhandler, setErrorHandler] = useState<any>();
    const [connection, setConnection] = useState<null | HubConnection>(null);


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
            playTogether, setPlayTogether, errorhandler, setErrorHandler, connection, setConnection
        }}>
            {props.children}
        </AppContext.Provider>
    )
}