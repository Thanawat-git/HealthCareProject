import { FORMS1P3_ADD_NEW } from "../constants"

const initialState = {
    neighborFirstName1: null,
    neighborLastName1: null,
    neighborGender1: null,
    neighbortime1: null,
    neighborRelative1: null,
    neighborPhoneNumber1: null,
    neighborFirstName2: null,
    neighborLastName2: null,
    neighborGender2: null,
    neighbortime2: null,
    neighborRelative2: null,
    neighborPhoneNumber2: null,
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P3_ADD_NEW:
        return { 
            neighborFirstName1: payload[0],
            neighborLastName1: payload[1],
            neighborGender1: payload[2],
            neighbortime1: payload[3],
            neighborRelative1: payload[4],
            neighborPhoneNumber1: payload[5],
            neighborFirstName2: payload[6],
            neighborLastName2: payload[7],
            neighborGender2: payload[8],
            neighbortime2: payload[9],
            neighborRelative2: payload[10],
            neighborPhoneNumber2: payload[11],
        }

    default:
        return state
    }
}
