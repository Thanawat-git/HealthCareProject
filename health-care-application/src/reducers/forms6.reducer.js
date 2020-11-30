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
    ans6_Im:0,
    ans6_Me:0,
    ans6_To:0,
    ans6_Fe:0,
    group:0,
    groupT:0,
    collect:false,
    results:"ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ",
    resultsTai:"ยังไม่สามารถแปลผลได้เนื่องจากยังกรอกข้อมูลไม่ครบ"
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
    ans6_Im:payload[10],
    ans6_Me:payload[11],
    ans6_To:payload[12],
    ans6_Fe:payload[13],
    group:payload[14],
    groupT:payload[15],
    collect:payload[16],
    results:payload[17],
    resultsTai:payload[18]

        }

    default:
        return state
    }
}
