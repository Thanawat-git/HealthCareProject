import { CREATE_NEW_FORMS8 } from "../constants";

export const setStateToAdd = (payload) => ({
    type: CREATE_NEW_FORMS8,
    payload
})

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })

// CREATE NEW FORM
export const add = (payload) =>{
    return dispatch=>{
        dispatch(setStateToAdd(payload))
    }
}

// export const edit = () =>{
//     return dispatch=>{
//         dispatch(setStateToEdit())
//     }
// }
