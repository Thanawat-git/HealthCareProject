import { FORMS1P1_ADD_NEW, FORM_EDIT } from "../constants";

export const setStateToAdd = (payload) => ({
    type: FORMS1P1_ADD_NEW,
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
