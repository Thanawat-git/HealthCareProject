import { CREATE_NEW_FORMS6 } from "../constants"

const initialState = {
    ans6_1:0,
    ans6_2:0,
    ans6_3:0,
    ans6_4:0,
    ans6_5:0,
    ans6_6:0,
    ans6_7:0,
    ans6_8:0,
    ans6_9:0,
    ans6_10:0,
    results:"ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
    collect:false,
    ans6_Im:null,
    ans6_Me:null,
    ans6_To:null,
    ans6_Fe:null,
    group:null,
    count:0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_FORMS6:
        return { 
            ans6_1:payload[0],
            ans6_2:payload[1],
            ans6_3:payload[2],
            ans6_4:payload[3],
            ans6_5:payload[4],
            ans6_6:payload[5],
            ans6_7:payload[6],
            ans6_8:payload[7],
            ans6_9:payload[8],
            ans6_10:payload[9],
            results:payload[10],
            collect:payload[11],
            ans6_Im:payload[12],
            ans6_Me:payload[13],
            ans6_To:payload[14],
            ans6_Fe:payload[15],
            group:payload[16],
            count:payload[17]

        }

    default:
        return state
    }
}
