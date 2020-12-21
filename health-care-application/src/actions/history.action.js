import Axios from "axios";
import { apiBase, apiEld, HTTP_HISTORY_FAILED, HTTP_HISTORY_FETCHING, HTTP_HISTORY_SUCCESS } from "../constants";

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

export const getAllAssessmentForms = ()=>{
    return dispatch => {
        dispatch(setHistoryToFetching())
        // return Axios.get(`${apiBase}/elder/visit/findAllVisitsForHistory`).then(res=>{
            return Axios.get("http://localhost:3001/elder/visit/findAllVisitsForHistory").then(res=>{
            dispatch(setHistoryToSuccress(res.data))
        }).catch(error=>{
            dispatch(setHistoryToFailed(error))
        })
    }
}