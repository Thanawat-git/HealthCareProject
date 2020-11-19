import { FORM_ADD } from "../constants"

const initialState = {
    peopleID: null,
    firstname: null,
    lastname: null,
    elderlyGender: null,
    nickname: null,
    elderlyBirthdate: null,
    elderlyAge: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORM_ADD:
        console.log('type : ',typeof payload)
        console.log('payload : ',payload)
        return {
            peopleID: payload[0], 
            firstname: payload[1],
            lastname: payload[2],
            elderlyGender: payload[3],
            nickname: payload[4],
            elderlyBirthdate: payload[5],
            elderlyAge: payload[6]
        }

    default:
        return state
    }
}
