import Axios from "axios";
import { apiBase, HTTP_FOLLOWUP_FAILED, HTTP_FOLLOWUP_FETCHING, HTTP_FOLLOWUP_SUCCESS } from "../constants";

export const setFollowupToFetching=()=>({
    type: HTTP_FOLLOWUP_FETCHING,
})
export const setFollowupToSuccress=(payload)=>({
    type: HTTP_FOLLOWUP_SUCCESS,
    payload,
})
export const setFollowupToFailed=(payload)=>({
    type: HTTP_FOLLOWUP_FAILED,
    payload,
})

export const getFollowUp = key =>{
    return dispatch => {
        // dispatch(setFollowupToFetching())
        doGetFollowUp(dispatch,key)
        // return Axios.get(`${apiBase}/appointment/${key}`).then(res=>{
        //     dispatch(setFollowupToSuccress(res.data))
        // }).catch(error=>{
        //     dispatch(setFollowupToFailed(error))
        // })
    }
}

export const deleteFollowUp = (id, key) =>{
    // console.log('id ',id, ' key ',key)
    return async dispatch=>{
        await Axios.delete(`${apiBase}/appointment/delete/${id}`)
        await doGetFollowUp(dispatch,key)
    }
}

// export const updateFollowUp = (id, key) =>{

// }

const doGetFollowUp = (dispatch,key) =>{
    dispatch(setFollowupToFetching())
    Axios.get(`${apiBase}/appointment/${key}`).then(res=>{
        dispatch(setFollowupToSuccress(res.data))
    }).catch(error=>{
        dispatch(setFollowupToFailed(error))
    })
}