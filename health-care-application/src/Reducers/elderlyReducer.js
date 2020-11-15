import { ADD_NEW_ELDERLY } from './Actions/actionsType'

const elderlyReducer = (state=[], action) => {

    switch (action.type) {
        case ADD_NEW_ELDERLY:
            // return state.concat([action.data])
            return [...state, action.data]
        default:
            return state
    }
}

export default elderlyReducer;