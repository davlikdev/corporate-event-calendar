import React, {useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import './App.css'
import {useAction} from "./hooks/useAction";
import {IUser} from "./models";
const App = () => {
    const {setUser, setIsAuth} = useAction()
    useEffect(() => {
        if (localStorage.getItem('isAuth')) {
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, []);
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;