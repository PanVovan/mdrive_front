import React, {useState} from 'react';
import './login.css'
import {Provider, useDispatch} from "react-redux";
import Input from "../../components/input/Input";
import {getLoginAction} from "../../features/auth/actions";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../reducers";
import logo from"../../assets/logo.png";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <center>
            <div className='authorization'>
                <div className="authorization__header">
                    <img src={logo} alt={logo}/>
                    <label>DataSaver</label>
                </div>
                <div className="authorization__container">
                    <label>Логин</label>
                    <Input value={email} setValue={setEmail} type="text" placeholder="Введите логин..."/>
                </div>
                <div className="authorization__container">
                    <label>Пароль</label>
                    <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
                </div>
                <button className="authorization__btn" onClick={() => {
                    console.log(email)
                    dispatch(getLoginAction(email, password))
                }}>Войти
                </button>
            </div>
        </center>)
        ;
};

export default Login;

const Wrapper = () => (<Provider store={store}>
    <BrowserRouter>
        <Login>

        </Login>
    </BrowserRouter>
</Provider>);