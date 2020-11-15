import { ADD_NEW_ELDERLY, ADD_NEW_ELDERLY_ADDRESS, ADD_NEW_ELDERLY_DATA } from './Actions/actionsType'

const initialState = {
    ELD_BASIC_INFO: [
        // {id:'', peopleID:'', elderlyFristName:'', elderlyLastName:'', elderlyGender:'', elderlyNickName:'', elderlyBirthday:'', Age:0}
    ],
    ELD_ADDRESS: [
        // {}
    ],
    ELD_RELATIVE:[],
    ELD_DATA:[],

}

const elderlyReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_NEW_ELDERLY:
            // return state.concat([action.data])
            state = {
                ...state,
                ELD_BASIC_INFO: [...state.ELD_BASIC_INFO, action.data]
            }
            return state
            // return [...state, action.data]
        case ADD_NEW_ELDERLY_ADDRESS:
            state = {
                ...state,
                ELD_ADDRESS: [...state.ELD_ADDRESS, action.data]
            }
            return state
        case ADD_NEW_ELDERLY_DATA:
            state = {
                ...state,
                ELD_DATA: [...state.ELD_DATA, action.data]
            }
            return state
        default:
            return state
    }
}

export default elderlyReducer;