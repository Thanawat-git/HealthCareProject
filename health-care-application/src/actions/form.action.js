import { FORM_ADD, FORM_EDIT } from "../constants";

export const setStateToAdd = (payload) => ({
    type: FORM_ADD,
    payload
})

export const setStateToEdit = () => ({
    type: FORM_EDIT,
})


export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}

export const edit = () =>{
    return dispatch=>{
        dispatch(setStateToEdit())
    }
}
