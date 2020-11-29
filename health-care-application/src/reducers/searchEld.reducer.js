import { FOUND_ELD } from "../constants";
const initialState = {
    found: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FOUND_ELD:
        return { found: payload }

    default:
        return state
    }
}
