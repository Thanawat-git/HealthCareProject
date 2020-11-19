import {combineReducers} from 'redux'

import ElderlyReducer from './elderlyReducer'
import FormReducer from './formReducer'
import formsec1_1Reducer from './formsec1_1.reducer'

export default combineReducers({
    ElderlyReducer,
    FormReducer,
    formsec1_1Reducer,
})