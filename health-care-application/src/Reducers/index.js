import {combineReducers} from 'redux'

import ElderlyReducer from './elderlyReducer'
import FormReducer from './formReducer'

export default combineReducers({
    ElderlyReducer,
    FormReducer,
})