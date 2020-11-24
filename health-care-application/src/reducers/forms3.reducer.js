import { CREATE_NEW_FORMS3 } from "../constants"

const initialState = {
    ans3_1: 0,
    ans3_2: 0,
    ans3_3: 0,
    ans3_4: 0,
    ans3_5:0,
    ans3_6: 0,
    ans3_7: 0,
    results3:null,
    collect: false

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_FORMS3:
        return { 
            ans3_1: payload[0],
            ans3_2: payload[1],
            ans3_3: payload[2],
            ans3_4: payload[3],
            ans3_5: payload[4],
            ans3_6: payload[5],
            results3: payload[6],
            collect:payload[7]


        }

    default:
        return state
    }
}
