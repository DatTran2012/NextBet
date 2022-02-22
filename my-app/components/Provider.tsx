import { FC } from 'react';
import { CookiesProvider } from 'react-cookie'
import AppProvider from './context/AppContext';
import Layout from './layout/Layout';

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