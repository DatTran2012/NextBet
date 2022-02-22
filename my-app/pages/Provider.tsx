import { FC } from 'react';
import { CookiesProvider } from 'react-cookie'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import AppProvider from './components/context/AppContext';
import Layout from './components/layout/Layout';

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}


export const Provider: FC = (props) => {

    return (
        <CookiesProvider>
            <AppProvider>
                <Layout>
                    {props.children}
                </Layout>
            </AppProvider>
        </CookiesProvider>
    )
}