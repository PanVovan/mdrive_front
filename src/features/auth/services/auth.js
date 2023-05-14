import axios from 'axios'
import {API_URL} from "../../../config";

export const registration = async (newUser) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {newUser})
        localStorage.setItem('token', response.data.token)
        return response.data.user
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/login`, {
            email,
            password
        }).catch((e) => console.log(e))
        localStorage.setItem('token', response.data.token)
        console.log(response.data)
        return response.data.user
    } catch (e) {
        alert(e.response.data.message)
    }

}

export const auth = async () => {
    try {
        const response = await axios.get(`${API_URL}api/auth/auth`,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
        localStorage.setItem('token', response.data.token)
        return response.data.user
    } catch (e) {
        localStorage.removeItem('token')
    }
}