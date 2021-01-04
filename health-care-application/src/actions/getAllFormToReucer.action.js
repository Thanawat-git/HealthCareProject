import Axios from 'axios';
import { apiBase, apiEld, CREATE_NEW_FORMS10, CREATE_NEW_FORMS2,CREATE_NEW_FORMS3, CREATE_NEW_FORMS4, CREATE_NEW_FORMS5, CREATE_NEW_FORMS6, CREATE_NEW_FORMS6T, CREATE_NEW_FORMS7, CREATE_NEW_FORMS7M, CREATE_NEW_FORMS8, CREATE_NEW_FORMS9, FORMS1P4_ADD_NEW, GET_COLLECT_S10, GET_COLLECT_S2, GET_COLLECT_S3, GET_COLLECT_S4, GET_COLLECT_S5, GET_COLLECT_S6, GET_COLLECT_S7, GET_COLLECT_S8, GET_COLLECT_S9 } from '../constants';

export const getCollect = visId =>{
    return dispatch => {
        return Axios.get(`http://localhost:3001/elder/examsummary/correct/${visId}`)
        // return Axios.get(`${apiEld}/examsummary/correct/${visId}`)
        .then(res=>{
            if(res.data.waist_correct && res.data.bmi_correct && res.data.bp_correct && res.data.fbs_correct) {
                dispatch({
                    type: GET_COLLECT_S2,
                    payload: true
                })
            }
            console.log('visId in api ', visId)
            dispatch({type: GET_COLLECT_S3,payload: res.data.cardio_correct})
            dispatch({type: GET_COLLECT_S4,payload: res.data.eye_correct})
            dispatch({type: GET_COLLECT_S5,payload: res.data.oral_correct})
            dispatch({type: GET_COLLECT_S6,payload: res.data.abi_correct})
            dispatch({type: GET_COLLECT_S7,payload: res.data.alz_correct})
            dispatch({type: GET_COLLECT_S8,payload: res.data.dep_correct})
            dispatch({type: GET_COLLECT_S9,payload: res.data.bone_correct})
            dispatch({type: GET_COLLECT_S10,payload: res.data.uri_correct})
        }).catch(error=>{
            console.log('visId in error ', visId)
            console.log('err ',error)
        })
    }
}

export const getDataSec2 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/elder/examsummary/exam2/${visId}`).then(res=>{
             console.log('res.data.bmi_bmi ',res.data)
            const data =[
                res.data.waist_waist,
                res.data.bmi_weight,
                res.data.bmi_height,
                res.data.bp_pulse,
                res.data.bp_bio_sys,
                res.data.bp_bio_dia,
                res.data.fast,
                res.data.fbs_fbs,
                res.data.waist_result,
                res.data.bmi_result,
                res.data.bp_result,
                res.data.fbs_result,
                res.data.fbs_correct,
            ]
            dispatch({
                type: 'FETCHING2',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS2,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec3 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/cardiovascular/update/${visId}`).then(res=>{
            const data =[
                res.data.cardio_3_1,
                res.data.cardio_3_1_count,
                res.data.cardio_3_2,
                res.data.cardio_3_3,
                res.data.cardio_3_4,
                res.data.cardio_3_5,
                res.data.cardio_3_6,
                res.data.cardio_3_7,
                res.data.cardio_count,
                res.data.cardio_count_result,
                res.data.cardio_correct,

            ]
            dispatch({
                type: 'FETCHING3',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS3,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec4 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/eye/update/${visId}`).then(res=>{
            const data =[
                res.data.eye_4_1,
                res.data.eye_4_2,
                res.data.eye_4_3,
                res.data.eye_4_4,
                res.data.eye_4_5,
                res.data.eye_count,
                res.data.eye_result,
                res.data.eye_correct,

            ]
            dispatch({
                type: 'FETCHING4',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS4,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec5 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/oralHealth/update/${visId}`).then(res=>{
            const data =[
                res.data.oral_5_1,
                res.data.oral_5_2,
                res.data.oral_5_3,
                res.data.oral_5_4_1,
                res.data.oral_5_4_2,
                res.data.oral_5_4_3,
                res.data.oral_5_4_4,
                res.data.oral_5_4_5,
                res.data.oral_5_5,
                res.data.oral_5_6,
                res.data.oral_5_7,
                res.data.oral_5_8,
                res.data.oral_5_9,
                res.data.oral_5_10,
                res.data.oral_5_11,
                res.data.oral_5_12,
                res.data.oral_5_13,
                res.data.oral_count,
                res.data.oral_result,
                res.data.oral_correct,

            ]
            dispatch({
                type: 'FETCHING5',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS5,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec6 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/abilityInLife/update/${visId}`).then(res=>{
            const data =[
                res.data.abi_6_1,
                res.data.abi_6_2,
                res.data.abi_6_3,
                res.data.abi_6_4,
                res.data.abi_6_5,
                res.data.abi_6_6,
                res.data.abi_6_7,
                res.data.abi_6_8,
                res.data.abi_6_9,
                res.data.abi_6_10,
                res.data.abi_sum_point,
                res.data.abi_group,
                res.data.abi_correct_form,

            ]
            dispatch({
                type: 'FETCHING6',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS6,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec7 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/alzheimer/update/${visId}`).then(res=>{
            const data =[
                res.data.alz_7_1_el_age,
                res.data.alz_7_1_result_age,
                res.data.alz_7_2_el_time,
                res.data.alz_7_2_result_time,
                res.data.alz_7_3_el_addr,
                res.data.alz_7_3_result_addr,
                res.data.alz_7_4_el_year,
                res.data.alz_7_4_result_year,
                res.data.alz_7_5_el_place,
                res.data.alz_7_5_result_place,
                res.data.alz_7_6_el_whom,
                res.data.alz_7_6_result_whom,
                res.data.alz_7_7_el_birthdate,
                res.data.alz_7_7_result_birthdate,
                res.data.alz_7_8_el_oct14,
                res.data.alz_7_8_result_oct14,
                res.data.alz_7_9_el_king,
                res.data.alz_7_9_result_king,
                res.data.alz_7_10_el_countdown,
                res.data.alz_7_10_result_countdown,
                res.data.alz_result,
                res.data.alz_correct_form,

            ]
            dispatch({
                type: 'FETCHING7',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS7,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec8 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/depressionScreening/update/${visId}`).then(res=>{
            const data =[
                res.data.dep_depressed,
                res.data.dep_not_enjoying,
                res.data.dep_check,
                res.data.dep_result,
                res.data.dep_correct_form,

            ]
            dispatch({
                type: 'FETCHING8',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS8,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec9 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/boneMuscle/update/${visId}`).then(res=>{
            const data =[
                res.data.bone_9_1,
                res.data.bone_9_2,
                res.data.bone_9_3,
                res.data.bone_9_4,
                res.data.bone_9_5,
                res.data.bone_9_6,
                res.data.bone_9_7,
                res.data.bone_9_8,
                res.data.bone_9_9,
                res.data.bone_9_10,
                res.data.bone_9_11,
                res.data.bone_9_12,
                res.data.bone_result,
                res.data.bone_walk,
                res.data.bone_walk_info,
                res.data.bone_phy_fit_minute,
                res.data.bone_phy_fit_second,
                res.data.bone_phy_result,
                res.data.bone_correct_form,

            ]
            dispatch({
                type: 'FETCHING9',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS9,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataSec10 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/urination/update/${visId}`).then(res=>{
            const data =[
                res.data.uri_10_1,
                res.data.uri_result,
                res.data.uri_correct_form,

            ]
            dispatch({
                type: 'FETCHING10',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS10,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
//http://localhost:3001/elder/information/searchOneEdu/1103702726761
export const getEducate = peopleId =>{
    //console.log("---------------------------get-----------")
    return dispatch =>{
        return Axios.get(`${apiBase}/elder/information/searchOneEdu/${peopleId}`).then(res=>{
            dispatch({
                type:"SET_EDUCATION",
                payload:res.data.ELD_EDU
            })
            console.log(res.data.ELD_EDU)
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}

export const mmse = visId =>{
   
    return dispatch => {
        return Axios.get(`${apiBase}/MMSE/findOne/${visId}`).then(res=>{
            
            const data =[
                res.data.textAns11,
                res.data.ans1,
                res.data.textAns12,
                res.data.ans12,
                res.data.textAns13,
                res.data.ans13,
                res.data.textAns14,
                res.data.ans14,
                res.data.textAns15,
                res.data.ans15,
                res.data.textAns211,
                res.data.ans2_1_1,
                res.data.textAns212,
                res.data.ans2_1_2,
                res.data.textAns213,
                res.data.ans2_1_3,
                res.data.textAns214,
                res.data.ans2_1_4,
                res.data.textAns215,
                res.data.ans2_1_5,
                res.data.ansF,
                res.data.ansR,
                res.data.ansT,
                res.data.num1,
                res.data.num2,
                res.data.num3,
                res.data.num4,
                res.data.num5,
                res.data.ansF2,
                res.data.ansR2,
                res.data.ansT2,
                res.data.ans61,
                res.data.ans62,
                res.data.ans7,
                res.data.thank1,
                res.data.thank2,
                res.data.thank3,
                res.data.ans9,
                res.data.textAns10,
                res.data.ans10,
                res.data.ans11,
                res.data.collect,
                res.data.results,
            ] 
            //console.log(data,"---------------------------data------------------")
            dispatch({
                type: 'FETCHINGMMSE',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS7M,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}
export const getDataTai = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/TAI/update/${visId}`).then(res=>{
            const data =[
                res.data.ans6_Im,
                res.data.ans6_Me,
                res.data.ans6_To,
                res.data.ans6_Fe,
                res.data.groupT,
                res.data.collect,
                res.data.results,
            ]
            dispatch({
                type: 'FETCHINGTAI',
                payload: data
            })
            dispatch({
                type: CREATE_NEW_FORMS6T,
                payload: data
            })
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}