import { CREATE_NEW_EDITACCOUNT } from "../constants";

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_EDITACCOUNT,
    payload
})

// CREATE NEW FORM
export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}
