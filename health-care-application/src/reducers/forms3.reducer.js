import { CREATE_NEW_FORMS3 } from "../constants"

const initialState = {
    ans3_1: null,
    ans3_2: null,
    ans3_3: null,
    ans3_4: null,
    ans3_5: null,
    ans3_6: null,
    results3: 'aaaaaa',
    collect: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_FORMS3:
        return { 
            ans3_1: payload[0],
            ans3_2: null,
            ans3_3: null,
            ans3_4: null,
            ans3_5: null,
            ans3_6: null,
            results3: payload[0]
        }

    default:
        return state
    }
}
