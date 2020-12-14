import {CREATE_NEW_EDITACCOUNT } from "../constants"

const initialState = {
                    uploadedImage:null,
                    imageUploader:null
}
 
export default (state = initialState, { type, payload }) => {
    switch (type) {

    case CREATE_NEW_EDITACCOUNT:
        return {
                    uploadedImage:payload[0],
                    imageUploader:payload[1],

        }

    default:
        return state
    }
}
