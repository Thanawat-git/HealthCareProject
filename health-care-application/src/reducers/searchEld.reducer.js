import { FOUND_ELD, SELECT_ELD } from "../constants";
const initialState = {
    found: [],
    selectEld: {
        ELD_ID_NUMBER:null,
        ELD_FIRSTNAME: null,
        ELD_LASTNAME: null,
        ELD_AKA: null,
        ELD_PHONE: null,
        FOOD_ALLERGY: [], //{FOOD_NAME:null}
        DRUG_ALLERGY: [], //{DRUG_NAME:null}
        DISEASE: [] //{DIS_NAME:null}
    },
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
    case 'AddPidToState':
        return {
            ...state,
            selectEld: {...state.selectEld, ELD_ID_NUMBER:payload}
        }
    default:
        return state
    }
}
