import { NETWORK_CONNECTED } from "../constants"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case NETWORK_CONNECTED:
        return { ...state, ...payload }

    default:
        return state
    }
}
