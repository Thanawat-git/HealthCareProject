import { CREATE_NEW_FORMS6T } from "../constants"

const initialState = {
                    ans6_Im:0,
                    ans6_Me:0,
                    ans6_To:0,
                    ans6_Fe:0,
                    groupT:0,
                    collect:false,
                    results:'ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_FORMS6T:
        return { 
 
                    ans6_Im:payload[0],
                    ans6_Me:payload[1],
                    ans6_To:payload[2],
                    ans6_Fe:payload[3],
                    groupT:payload[4],
                    collect:payload[5],
                    results:payload[6]
                    
        }

    default:
        return state
    }
}
