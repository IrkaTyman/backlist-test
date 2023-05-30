import React, {Suspense, FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Spin, ConfigProvider} from 'antd';

import {ToastContainer} from 'react-toastify';

import {RootRouter} from './routes/RootRouter';
import 'react-toastify/scss/main.scss';
import {Header} from "./components/Header";

export const App: FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider
                theme={{
                    token: {
                        fontSize: 16,
                        fontFamily: "'IBM Plex Sans', sans-serif",
                        fontWeightStrong: 400,
                    },
                }}>
                <Header/>
                <Suspense fallback={<Spin/>}>
                    <div className="content">
                        <RootRouter/>
                    </div>
                    <ToastContainer/>
                </Suspense>
            </ConfigProvider>
        </BrowserRouter>
    );
}
