import { FORMS1P1_ADD_NEW } from "../constants"

const initialState = {
    peopleID: null,
    firstname: null,
    lastname: null,
    elderlyGender: null,
    nickname: null,
    elderlyBirthdate: null,
    elderlyAge: null,
    year: null,
    month: null,
    day: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P1_ADD_NEW:
        // console.log('type : ',typeof payload)
        // console.log('payload : ',payload)
        return {
            peopleID: payload[0], 
            firstname: payload[1],
            lastname: payload[2],
            elderlyGender: payload[3],
            nickname: payload[4],
            elderlyBirthdate: payload[5],
            elderlyAge: payload[6],
            year: payload[7],
            month: payload[8],
            day: payload[9],
        }

    default:
        return state
    }
}
