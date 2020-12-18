import Axios from 'axios';
import { apiBase, apiEld, CREATE_NEW_FORMS2, GET_COLLECT_S10, GET_COLLECT_S2, GET_COLLECT_S3, GET_COLLECT_S4, GET_COLLECT_S5, GET_COLLECT_S6, GET_COLLECT_S7, GET_COLLECT_S8, GET_COLLECT_S9 } from '../constants';

export const getCollect = visId =>{
    return dispatch => {
        return Axios.get(`${apiEld}/examsummary/correct/${visId}`)
        .then(res=>{
            if(res.data.waist_correct && res.data.bmi_correct && res.data.bp_correct && res.data.fbs_correct) {
                dispatch({
                    type: GET_COLLECT_S2,
                    payload: true
                })
            }
            dispatch({type: GET_COLLECT_S3,payload: res.data.cardio_correct})
            dispatch({type: GET_COLLECT_S4,payload: res.data.eye_correct})
            dispatch({type: GET_COLLECT_S5,payload: res.data.oral_correct})
            dispatch({type: GET_COLLECT_S6,payload: res.data.abi_correct})
            dispatch({type: GET_COLLECT_S7,payload: res.data.alz_correct})
            dispatch({type: GET_COLLECT_S8,payload: res.data.dep_correct})
            dispatch({type: GET_COLLECT_S9,payload: res.data.bone_correct})
            dispatch({type: GET_COLLECT_S10,payload: res.data.uri_correct})
        }).catch(error=>{
            console.log('err ',error)
        })
    }
}

export const getDataSec2 = visId =>{
    return dispatch => {
        return Axios.get(`${apiBase}/elder/examsummary/exam2/${visId}`).then(res=>{
            // console.log('res.data.bmi_bmi ',res.data)
            const data =[
                res.data.waist_waist,
                res.data.bmi_weight,
                res.data.bmi_height,
                res.data.bp_pulse,
                res.data.bp_bio_sys,
                res.data.bp_bio_dia,
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