import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const LoginForm = () => {
    const {login} = useAction()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const submit = () => {
        login(username, password);
    }
    const {error, isLoading} = useTypedSelector(state => state.auth)

    return (
        <Form
            onFinish={submit}
        >
            {error && error}
            <Form.Item
                label="Username"
                name="username"
                rules={[rules.required('Please input your username!')]}
            >
                <Input onChange={e => setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[rules.required('Please input your password!')]}
            >
                <Input.Password onChange={e => setPassword(e.target.value)}/>
            </Form.Item>


            <Form.Item label={null}>
                <Button loading={isLoading} type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;