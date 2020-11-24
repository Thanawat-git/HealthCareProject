import { FORMS1P6_ADD_NEW } from "../constants"

const initialState = {
    diseases: ['ความดันโลหิตสูง','เบาหวาน','ไขมันในเส้นเลือดสูง','โรคหัวใจ'],
    date: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case FORMS1P6_ADD_NEW:
        return { 
            diseases: payload[0],
            date: payload[1]
        }

    default:
        return state
    }
}
