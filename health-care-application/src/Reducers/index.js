import {combineReducers} from 'redux'

import forms1p1Reducer from './forms1p1.reducer'
import forms1p2Reducer from './forms1p2.reducer'
import forms1p3Reducer from './forms1p3.reducer'
import forms1p4Reducer from './forms1p4.reducer'
import forms1p5Reducer from './forms1p5.reducer'
import forms1p6Reducer from './forms1p6.reducer'
import forms2Reducer from './forms2.reducer'
import forms3Reducer from './forms3.reducer'
import forms4Reducer from './forms4.reducer'
import forms5Reducer from './forms5.reducer'
import forms6Reducer from './forms6.reducer'
import formsTaiReducer from './formsTai.reducer'
import forms7Reducer from './forms7.reducer'
import forms7mReducer from './forms7m.reducer'
import forms8Reducer from './forms8.reducer'
import forms89qReducer from './forms89q.reducer'
import forms10Reducer from './forms10reducer'
import forms9Reducer from './forms9.reducer'
import forms92Reducer from './forms92.reducer'
import elderlyReducer from "./elderly.reducer";
import volunteerReducer from "./volunteer.reducer";
import adminReducer from "./admin.reducer";
import authReducer from "./auth.ruducer";
import messageReducer from "./message.reducer";
import editaccountReducer from "./editaccount.reducer";
import visitID from "./visitID.reducer";
import historyReducer from "./history.reducer";
import followUpReducer from "./followUp.reducer";

export default combineReducers({
    forms1p1Reducer,
    forms1p2Reducer,
    forms1p3Reducer,
    forms1p4Reducer,
    forms1p5Reducer,
    forms1p6Reducer,
    forms2Reducer,
    forms3Reducer,
    forms4Reducer,
    forms5Reducer,
    forms6Reducer,
    formsTaiReducer,
    forms7Reducer,
    forms7mReducer,
    forms8Reducer,
    forms89qReducer,
    forms10Reducer,
    forms9Reducer,
    forms92Reducer,
    elderlyReducer,
    volunteerReducer,
    adminReducer,
    authReducer,
    messageReducer,
    editaccountReducer,
    visitID,
    historyReducer,
    followUpReducer,
})