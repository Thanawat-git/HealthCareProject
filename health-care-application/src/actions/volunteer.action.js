import Axios from "axios";
import { HTTP_VOL_FAILED, HTTP_VOL_FETCHING, HTTP_VOL_SUCCRESS, apiVol } from "../constants";

export const setVolunteerStateToFetching = () => ({
  type: HTTP_VOL_FETCHING,
});

export const setVolunteerStateToSuccress = (payload) => ({
  type: HTTP_VOL_SUCCRESS,
  payload,
});

export const setVolunteerStateToFailed = () => ({
  type: HTTP_VOL_FAILED,
});

export const createVolunteer = payload =>{
    return async dispatch =>{
        await Axios.post(`${apiVol}/create`, {
            VOL_ID_NUMBER: payload[0],
            VOL_PASSWORD: payload[0],
            VOL_FIRSTNAME: payload[1],
            VOL_LASTNAME: payload[2],
            VOL_PHONE: payload[3],
            VOL_LINE: payload[4],
            VOL_FACEBOOK: payload[5],
            VOL_PHOTO: "-",
            VOL_STATUS: true,
            updateBy: "1000000000001"
        })
        await doGetVolunteer(dispatch)
        
    }
}

export const deleteVolunteer = id =>{
    return async dispatch =>{
        dispatch(setVolunteerStateToFetching())
        await Axios.delete(`${apiVol}/delete/${id}`)
        await doGetVolunteer(dispatch)
        
    } 
}

export const getVolunteerByKeyword = event =>{
    return dispatch => {
        dispatch(setVolunteerStateToFetching())
        try {
            var keyword = event.target.value;
            if(keyword !== null && keyword != "") {
                return Axios.get(`${apiVol}/findByKeyword/${keyword}`).then(res=>{
                    dispatch(setVolunteerStateToSuccress(res.data))
                })
            } else {
                doGetVolunteer(dispatch)
            }
            
        } catch (error) {
            dispatch(setVolunteerStateToFailed())
        }
    }
}

export const getAllVolunteers = ()=>{
    return dispatch =>{
        dispatch(setVolunteerStateToFetching())
        doGetVolunteer(dispatch)
        // return Axios.get(`${apiVol}/findAll`).then(res=>{
        //     dispatch(setVolunteerStateToSuccress(res.data))
        // })
}}

const doGetVolunteer = (dispatch)=>{
   
   Axios.get(`${apiVol}/findAll`).then(res=>{
       console.log('res.data ',res.data)
        dispatch(setVolunteerStateToSuccress(res.data))
    }).catch(error=>{
        dispatch(setVolunteerStateToFailed())
    })
}