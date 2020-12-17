import Axios from "axios"
import { apiBase, USER } from "../constants"

const loginVolunteer = (username, password) => {
    // return Axios.post(`${apiBase}/volunteer/auth` ,{
    return Axios.post(`http://localhost:3001/volunteer/auth` ,{
        VOL_ID_NUMBER: username,
        VOL_PASSWORD: password,
    }).then((response)=>{
        if(response.data.accessToken) {
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
    logout,
}