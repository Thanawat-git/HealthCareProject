import { FOUND_ELD, SELECT_ELD } from "../constants";
const initialState = {
    found: null,
    selectEld: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FOUND_ELD:
        return { ...state, found: payload }
    case SELECT_ELD:
        return {
            ...state,
            selectEld: payload //ข้อมูลของผู้สูงอายุที่เลือก
        }
    default:
        return state
    }
}
