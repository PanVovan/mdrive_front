import React, {useState} from 'react';
import './login.css'
import {Provider, useDispatch} from "react-redux";
import Input from "../../components/input/Input";
import {getLoginAction} from "../../features/auth/actions";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import userReducer from "../../features/auth/reducers/userReducer";
import {login} from "../../features/auth/services/auth";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className='authorization'>
            <div className="authorization__header">Авторизация</div>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="authorization__btn" onClick={() => {
                console.log(email)
                dispatch(getLoginAction(email, password))}
            }>Войти</button>
        </div>
    );
};

export default Login;

const Wrapper = () => (
    <Provider store={createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)))}>
        <BrowserRouter>
            <Login>

            </Login>
        </BrowserRouter>
    </Provider>
);