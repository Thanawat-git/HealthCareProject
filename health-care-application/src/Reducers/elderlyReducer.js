import { ADD_NEW_ELDERLY } from './Actions/actionsType'

const initialState = {
    elderlyBasicInfo: [
        {id:'', peopleID:'', elderlyFristName:'', elderlyLastName:'', elderlyGender:'', elderlyNickName:'', elderlyBirthday:'', Age:0}
    ]
}

const elderlyReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_NEW_ELDERLY:
            // return state.concat([action.data])
            state = {
                ...state,
                elderlyBasicInfo: [...state.elderlyBasicInfo, action.data]
            }
            return state
            // return [...state, action.data]
        default:
            return state
    }
}

export default elderlyReducer;