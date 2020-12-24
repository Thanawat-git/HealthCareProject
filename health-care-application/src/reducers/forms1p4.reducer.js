import { FORMS1P4_ADD_NEW } from "../constants"

const initialState = {
    elderlyStatus: null, 
    elderlyBeing: null, 
    elderlyBeingDetail: null,
    being: null,
    neighborName: null,
    religion: null,
    otherReligion: null,
    educations: null,
    careers: null,
    treatment: null,
    hospital: null,
    otherTreatment: null,
    salary: null,
    otherCareers: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P4_ADD_NEW:
        return { 
            elderlyStatus: payload[0], 
            elderlyBeing: payload[1], 
            elderlyBeingDetail: payload[2],
            being: payload[3],
            neighborName: payload[4],
            religion: payload[5],
            educations: payload[6],
            careers: payload[7],
            treatment: payload[8],
            hospital: payload[9],
            otherTreatment: payload[10],
            salary: payload[11],
            otherReligion: payload[12],
            otherCareers: payload[13]
        }
        case "SET_EDUCATION":
            return {...state, educations: payload,}
    default:
        return state
    }
}
