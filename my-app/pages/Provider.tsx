import { FC } from 'react';
import AppProvider from './components/context/AppContext';
import Layout from './components/layout/Layout';

export const Provider: FC = (props) => {

    return (
        <AppProvider>
            <Layout>
                {props.children}
            </Layout>
        </AppProvider>
    )
}