import { USER } from "../constants"

export default function authHeader() {
    const user = JSON.parse(localStorage.getItem(USER))

    if(user && user.accessToken){
        return { Authorization: 'x-access-token' + user.accessToken }
    } else {
        return {}
    }
}