import {login, registration} from "../services/auth";
import {setUser} from "../reducers/userReducer";


export function getLoginAction(dirId) {
    return async dispatch => {
        login(dirId).then(r => dispatch(setUser(r)))
    }
}

export function getRegisterAction(dirId) {
    return async dispatch => {
        registration(dirId).then(r => dispatch(setUser(r)))
    }
}