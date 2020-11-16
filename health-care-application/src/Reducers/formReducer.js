import {
    ADD_NEW_FORM_SEC0, 
    ADD_NEW_FORM_SEC2, 
    ADD_NEW_FORM_SEC3, 
    ADD_NEW_FORM_SEC4, 
    ADD_NEW_FORM_SEC5,
    ADD_NEW_FORM_SEC6,
    ADD_NEW_FORM_SEC7,
    ADD_NEW_FORM_SEC8,
    ADD_NEW_FORM_SEC9
} 
from './Actions/actionsType'

const initialState = {
    SEC2:[],
    SEC3:[],
    SEC4:[],
    SEC5:[],
    SEC6:[],
    SEC7:[],
    SEC8:[],
    SEC9:[],
    SEC0:[],
}

const formReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ADD_NEW_FORM_SEC2:
            state = {...state,SEC2: [...state.SEC2, action.data]}
            return state;
        case ADD_NEW_FORM_SEC3:
            state = {...state,SEC3: [...state.SEC3, action.data]}
            return state;
        case ADD_NEW_FORM_SEC4:
            state = {...state,SEC4: [...state.SEC4, action.data]}
            return state;
        case ADD_NEW_FORM_SEC5:
            state = {...state,SEC5: [...state.SEC5, action.data]}
            return state;
        case ADD_NEW_FORM_SEC6:
            state = {...state,SEC6: [...state.SEC6, action.data]}
            return state;
        case ADD_NEW_FORM_SEC7:
            state = {...state,SEC7: [...state.SEC7, action.data]}
            return state;
        case ADD_NEW_FORM_SEC8:
            state = {...state,SEC8: [...state.SEC8, action.data]}
            return state;
        case ADD_NEW_FORM_SEC9:
            state = {...state,SEC9: [...state.SEC9, action.data]}
            return state;
        case ADD_NEW_FORM_SEC0:
            state = {...state,SEC0: [...state.SEC0, action.data]}
            return state;
        default:
            return state;
    }
}

export default formReducer;