import React, {useState} from 'react';
import './login.css'
import {Provider, useDispatch} from "react-redux";
import Input from "../../components/input/Input";
import {getLoginAction} from "../../features/auth/actions";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../reducers";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (<div className='authorization'>
        <div className="authorization__header">Авторизация</div>
        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
        <button className="authorization__btn" onClick={() => {
            console.log(email)
            dispatch(getLoginAction(email, password))
        }}>Войти
        </button>
    </div>);
};

export default Login;

const Wrapper = () => (<Provider store={store}>
    <BrowserRouter>
        <Login>

        </Login>
    </BrowserRouter>
</Provider>);