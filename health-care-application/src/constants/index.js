require('dotenv').config()
const api = process.env.REACT_APP_API_BACKEND;
// Action type
export const FORMS1P1_ADD_NEW = 'FORMS1P1_ADD_NEW';
export const FORMS1P2_ADD_NEW = 'FORMS1P2_ADD_NEW';
export const FORMS1P3_ADD_NEW = 'FORMS1P3_ADD_NEW';
export const FORMS1P4_ADD_NEW = 'FORMS1P4_ADD_NEW';
export const FORMS1P5_ADD_NEW = 'FORMS1P5_ADD_NEW';
export const FORMS1P6_ADD_NEW = 'FORMS1P6_ADD_NEW';
export const CREATE_NEW_FORMS2 = 'CREATE_NEW_FORMS2';
export const CREATE_NEW_FORMS3 = 'CREATE_NEW_FORMS3';
export const CREATE_NEW_FORMS4 = 'CREATE_NEW_FORMS4';
export const CREATE_NEW_FORMS5 = 'CREATE_NEW_FORMS5';
export const CREATE_NEW_FORMS6 = 'CREATE_NEW_FORMS6';
export const CREATE_NEW_FORMS6T = 'CREATE_NEW_FORMS6T';
export const CREATE_NEW_FORMS7 = 'CREATE_NEW_FORMS7';
export const CREATE_NEW_FORMS7M = 'CREATE_NEW_FORMS7M';
export const CREATE_NEW_FORMS8 = 'CREATE_NEW_FORMS8';
export const CREATE_NEW_FORMS89Q = 'CREATE_NEW_FORMS89Q';
export const CREATE_NEW_FORMS9 = 'CREATE_NEW_FORMS9';
export const CREATE_NEW_FORMS92 = 'CREATE_NEW_FORMS92';
export const CREATE_NEW_FORMS10 = 'CREATE_NEW_FORMS10';
export const CREATE_NEW_EDITACCOUNT= 'CREATE_NEW_EDITACCOUNT';

//get collect only
export const GET_COLLECT_S2 = 'GET_COLLECT_S2';
export const GET_COLLECT_S3 = 'GET_COLLECT_S3';
export const GET_COLLECT_S4 = 'GET_COLLECT_S4';
export const GET_COLLECT_S5 = 'GET_COLLECT_S5';
export const GET_COLLECT_S6 = 'GET_COLLECT_S6';
export const GET_COLLECT_S7 = 'GET_COLLECT_S7';
export const GET_COLLECT_S8 = 'GET_COLLECT_S8';
export const GET_COLLECT_S9 = 'GET_COLLECT_S9';
export const GET_COLLECT_S10 = 'GET_COLLECT_S10';

// Search elderly
export const HTTP_ELD_FETCHING = "HTTP_ELD_FETCHING";
export const HTTP_ELD_SUCCESS = "HTTP_ELD_SUCCESS";
export const HTTP_ELD_SELECTED = "HTTP_ELD_SELECTED";
export const HTTP_ELD_FAILED = "HTTP_ELD_FAILED";


// Volunteer
export const HTTP_VOL_FETCHING = "HTTP_VOL_FETCHING";
export const HTTP_VOL_SUCCESS = "HTTP_VOL_SUCCESS";
export const HTTP_VOL_FAILED = "HTTP_VOL_FAILED";

// Admin
export const HTTP_ADMIN_FETCHING = "HTTP_ADMIN_FETCHING";
export const HTTP_ADMIN_SUCCESS = "HTTP_ADMIN_SUCCESS";
export const HTTP_ADMIN_FAILED = "HTTP_ADMIN_FAILED";

// History
export const HTTP_HISTORY_FETCHING = "HTTP_HISTORY_FETCHING";
export const HTTP_HISTORY_SUCCESS = "HTTP_HISTORY_SUCCESS";
export const HTTP_HISTORY_FAILED = "HTTP_HISTORY_FAILED";
export const HTTP_HISTORY_SELECTED = "HTTP_HISTORY_SELECTED";

// Follow Up
export const HTTP_FOLLOWUP_FETCHING = "HTTP_FOLLOWUP_FETCHING";
export const HTTP_FOLLOWUP_SUCCESS = "HTTP_FOLLOWUP_SUCCESS";
export const HTTP_FOLLOWUP_FAILED = "HTTP_FOLLOWUP_FAILED";
export const HTTP_FOLLOWUP_SELECTED = "HTTP_FOLLOWUP_SELECTED";

// // Login Page
// export const APP_INIT = "APP_INIT";


// // Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";
// Logout
export const LOGOUT = "LOGOUT";
// Message
export const SET_MESSAGE = "SET_MESSAGE";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

//
export const APPOINTMENT = "APPOINTMENT";



// // Error Code
// export const E_PICKER_CANCELLED = 'E_PICKER_CANCELLED'
// export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR = 'E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR'
// export const E_PERMISSION_MISSING = 'E_PERMISSION_MISSING'
// export const E_PICKER_NO_CAMERA_PERMISSION = 'E_PICKER_NO_CAMERA_PERMISSION'
// export const E_USER_CANCELLED = 'E_USER_CANCELLED'
// export const E_UNKNOWN = 'E_UNKNOWN'
// export const E_DEVELOPER_ERROR = 'E_DEVELOPER_ERROR'
// export const TIMEOUT_NETWORK = 'ECONNABORTED' // request service timeout
export const NOT_CONNECT_NETWORK = 'NOT_CONNECT_NETWORK' 

// //////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE = 'Cannot connect to server, Please try again.' 
// export const NETWORK_TIMEOUT_MESSAGE = 'A network timeout has occurred, Please try again.'  
// export const UPLOAD_PHOTO_FAIL_MESSAGE = 'An error has occurred. The photo was unable to upload.' 
export const USER = 'user'
export const USERLOGIN = JSON.parse(localStorage.getItem(USER))
export const apiBase =  api;
export const apiEld = apiBase + "/elder";
export const apiVol = apiBase + "/volunteer";
export const apiAdmin = apiBase + "/admin";

console.log('USERLOGIN ',USERLOGIN)