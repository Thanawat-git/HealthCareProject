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
            neighborName: payload[3],
            religion: payload[4],
            educations: payload[5],
            careers: payload[6],
            treatment: payload[7],
            hospital: payload[8],
            otherTreatment: payload[9],
            salary: payload[10],
            otherReligion: payload[11],
            otherCareers: payload[12]
        }
        case "SET_EDUCATION":
            return {...state, educations: payload,}
    default:
        return state
    }
}
