import { FORMS1P6_ADD_NEW } from "../constants"

const initialState = {
    disease: [],
    date: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P6_ADD_NEW:
        return { 
            drugs: payload[0],
            date: payload[1]
        }

    default:
        return state
    }
}
