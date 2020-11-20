import { FORMS1P5_ADD_NEW } from "../constants"

const initialState = {
    drugAllergy: null,
    drugs: [],
    foodAllergy: null,
    foods: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P5_ADD_NEW:
        return { 
            drugAllergy: payload[0],
            drugs: payload[1],
            foodAllergy: payload[2],
            foods: payload[3]
        }

    default:
        return state
    }
}
