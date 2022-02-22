import { FC } from 'react';
import { CookiesProvider } from 'react-cookie'
import AppProvider from './components/context/AppContext';
import Layout from './components/layout/Layout';

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