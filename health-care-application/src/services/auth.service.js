import Axios from "axios"
import { apiBase, USER } from "../constants"

const loginVolunteer = (username, password) => {
    return Axios.post(`${apiBase}/volunteer/auth` ,{
        VOL_ID_NUMBER: username,
        VOL_PASSWORD: password,
    }).then((response)=>{
        if(response.data) {
            localStorage.setItem(USER, JSON.stringify(response.data))
        }

        return response.data
    })
}

const loginAdmin = (username, password) => {
    return Axios.post(`${apiBase}/admin/auth`, {
        ADM_ID_NUMBER: username,
        ADM_PASSWORD: password,
    }).then((response)=>{
        if(response.data) {
            localStorage.setItem(USER, JSON.stringify(response.data))
        }
        return response.data
    })
}

const logout = () =>{
    localStorage.removeItem(USER)
}

export default {
    loginVolunteer,
    loginAdmin,
    logout,
}