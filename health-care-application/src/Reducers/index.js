import {combineReducers} from 'redux'

import ElderlyReducer from './elderlyReducer'
import FormReducer from './formReducer'
import forms1p1Reducer from './forms1p1.reducer'
import forms1p2Reducer from './forms1p2.reducer'
import forms1p3Reducer from './forms1p3.reducer'
import forms1p4Reducer from './forms1p4.reducer'

export default combineReducers({
    ElderlyReducer,
    FormReducer,
    forms1p1Reducer,
    forms1p2Reducer,
    forms1p3Reducer,
    forms1p4Reducer,
})