import { NETWORK_CONNECTED, NETWORK_ERROR } from "../constants"

const initialState = {
    err: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case NETWORK_CONNECTED:
        return { err: false }

    case NETWORK_ERROR:
        return { err: true }
    default:
        return state
    }
}
