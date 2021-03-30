import {CREATE_NEW_EDITACCOUNT,UPDATE_EDITACCOUNT } from "../constants"

const initialState = {
    firstname:"",
    lastanme:"",
    phone:"",
}
 
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_EDITACCOUNT:
        return {
            firstname:payload[0],
            lastanme:payload[1],
            phone:payload[2],
        }
    case "DEAFALUT_ACCOUNT" :
        return {
            firstname:"",
            lastanme:"",
            phone:"",
        }
    default:
        return state
    }
}
