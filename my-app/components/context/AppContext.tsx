/* eslint-disable react/no-children-prop */
import react, { createContext, useState } from 'react'

export const AppContext = createContext(null);

export default function AppProvider(props: { children: boolean | react.ReactChild | react.ReactFragment | react.ReactPortal; }) {
    const [userAddress, setUserAddress] = useState<any>();
    const [userBalance, setUserBalance] = useState<any>('0')
    const [userSolanaAccount, setUserSolanaAccount] = useState<any>()
    const [playTogether, setPlayTogether] = useState<any>()

    return (
        <AppContext.Provider value={{ userAddress, setUserAddress, userBalance, setUserBalance, userSolanaAccount, setUserSolanaAccount, playTogether, setPlayTogether }}>
            {props.children}
        </AppContext.Provider>
    )
}