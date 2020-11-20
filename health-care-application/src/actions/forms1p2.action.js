import { FORMS1P2_ADD_NEW } from "../constants";

export const setStateToAdd = (payload) => ({
    type: FORMS1P2_ADD_NEW,
    payload
})

// export const setStateToEdit = () => ({
//     type: FORM_EDIT,
// })


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
