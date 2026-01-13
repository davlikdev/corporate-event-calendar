import {Layout, Menu, Row} from 'antd';
import React from 'react';
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../router/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const Navbar = () => {
    const navigate = useNavigate();
    const {isAuth} = useTypedSelector(state => state.auth)
    const {logout} = useAction()

    return (
        <Layout.Header>
            <Row justify="end">
                <Menu theme="dark" mode="horizontal" disabledOverflow selectable={false}>
                    {isAuth ? <Menu.Item onClick={() => {
                            navigate(RouteNames.LOGIN, {replace: true})
                            logout()
                        }} key={1}>Logout</Menu.Item>

                        : <Menu.Item onClick={() => {
                            navigate(RouteNames.EVENT, {replace: true})
                        }} key={12}>Login</Menu.Item>
                    }
                </Menu>
            </Row>
        </Layout.Header>
    );
};

export default Navbar;