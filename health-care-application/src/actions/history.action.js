import Axios from "axios";
import { apiBase, apiEld, HTTP_HISTORY_FAILED, HTTP_HISTORY_FETCHING, HTTP_HISTORY_SELECTED, HTTP_HISTORY_SUCCESS } from "../constants";

export const setHistoryToFetching=()=>({
    type: HTTP_HISTORY_FETCHING,
})
export const setHistoryToSuccress=(payload)=>({
    type: HTTP_HISTORY_SUCCESS,
    payload,
})
export const setHistoryToFailed=(payload)=>({
    type: HTTP_HISTORY_FAILED,
    payload,
})
export const setHistorySelected=(payload)=>({
    type: HTTP_HISTORY_SELECTED,
    payload,
})

export const getAllAssessmentForms = ()=>{
    return dispatch => {
        dispatch(setHistoryToFetching())
        // doGetAssessmentForms(dispatch)
        return Axios.get(`${apiEld}/visit/findAllVisitsForHistory`).then(res=>{
            console.log('get history ',res.data)
            dispatch(setHistoryToSuccress(res.data))
        }).catch(error=>{
            dispatch(setHistoryToFailed(error))
        })
    }
}

export const getHistorySelected = (id)=>{
    return dispatch => {
        // dispatch(setHistoryToFetching())
        return Axios.get(`${apiEld}/examsummary/forhistory/${id}`).then(res=>{
            dispatch(setHistorySelected(res.data))
        }).catch(error=>{
            dispatch(setHistoryToFailed(error))
        })
    }
}
// const doGetAssessmentForms = dispatch => {
//     Axios.get("http://localhost:3001/elder/visit/findAllVisitsForHistory").then(res=>{
//         dispatch(setHistoryToSuccress(res.data))
//     }).catch(error=>{
//         dispatch(setHistoryToFailed(error))
//     })
// }