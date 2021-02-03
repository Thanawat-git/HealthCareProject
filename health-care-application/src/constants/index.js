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

// set default store form
export const SET_MMSE_TO_DEFAULT= 'SET_MMSE_TO_DEFAULT';
export const SET_TAI_TO_DEFAULT= 'SET_TAI_TO_DEFAULT';
export const SET_89Q_TO_DEFAULT= 'SET_89Q_TO_DEFAULT';
export const SET_SEC2_TO_DEFAULT= 'SET_SEC2_TO_DEFAULT';
export const SET_SEC3_TO_DEFAULT= 'SET_SEC3_TO_DEFAULT';
export const SET_SEC4_TO_DEFAULT= 'SET_SEC4_TO_DEFAULT';
export const SET_SEC5_TO_DEFAULT= 'SET_SEC5_TO_DEFAULT';
export const SET_SEC6_TO_DEFAULT= 'SET_SEC6_TO_DEFAULT';
export const SET_SEC7_TO_DEFAULT= 'SET_SEC7_TO_DEFAULT';
export const SET_SEC8_TO_DEFAULT= 'SET_SEC8_TO_DEFAULT';
export const SET_SEC9_TO_DEFAULT= 'SET_SEC9_TO_DEFAULT';
export const SET_SEC92_TO_DEFAULT= 'SET_SEC92_TO_DEFAULT';
export const SET_SEC10_TO_DEFAULT= 'SET_SEC10_TO_DEFAULT';

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

//get result only
export const GET_RESULT_S2 = 'GET_RESULT_S2';
export const GET_RESULT_S3 = 'GET_RESULT_S3';
export const GET_RESULT_S4 = 'GET_RESULT_S4';
export const GET_RESULT_S5 = 'GET_RESULT_S5';
export const GET_RESULT_S6 = 'GET_RESULT_S6';
export const GET_RESULT_TAI = 'GET_RESULT_TAI';
export const GET_RESULT_S7 = 'GET_RESULT_S7';
export const GET_RESULT_S7M = 'GET_RESULT_S7M';
export const GET_RESULT_S8 = 'GET_RESULT_S8';
export const GET_RESULT_S89Q = 'GET_RESULT_S89Q';
export const GET_RESULT_S9 = 'GET_RESULT_S9';
export const GET_RESULT_S92 = 'GET_RESULT_S92';
export const GET_RESULT_S10 = 'GET_RESULT_S10';

// Search elderly
export const HTTP_ELD_FETCHING = "HTTP_ELD_FETCHING";
export const HTTP_ELD_SUCCESS = "HTTP_ELD_SUCCESS";
export const HTTP_ELD_SELECTED = "HTTP_ELD_SELECTED";
export const HTTP_ELD_FAILED = "HTTP_ELD_FAILED";
export const GET_ALL_ELDERY = "GET_ALL_ELDERY";
export const GET_ELDERY_INFO = "GET_ELDERY_INFO";


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
export const GET_HISTORY_EDL = "GET_HISTORY_EDL"; // get all form history's this eldery
export const SELECT_SECTION = "SELECT_SECTION"

// Follow Up
export const HTTP_FOLLOWUP_FETCHING = "HTTP_FOLLOWUP_FETCHING";
export const HTTP_FOLLOWUP_SUCCESS = "HTTP_FOLLOWUP_SUCCESS";
export const HTTP_FOLLOWUP_FAILED = "HTTP_FOLLOWUP_FAILED";
export const HTTP_FOLLOWUP_SELECTED = "HTTP_FOLLOWUP_SELECTED";
export const GET_RESULT_FOLLOW_SEC2 = "GET_RESULT_FOLLOW_SEC2";
export const GET_RESULT_FOLLOW_SEC3 = "GET_RESULT_FOLLOW_SEC3";
export const GET_RESULT_FOLLOW_SEC5 = "GET_RESULT_FOLLOW_SEC5";

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

// Chart
export const CHART1_FETCHING = "CHART1_FETCHING";
export const CHART1_ERROR = "CHART1_ERROR";
export const CHART1_GET_SUCCRESS = "CHART1_GET_SUCCRESS";
export const CHART2_FETCHING = "CHART2_FETCHING";
export const CHART2_ERROR = "CHART2_ERROR";
export const CHART2_GET_SUCCRESS = "CHART2_GET_SUCCRESS";
export const CHART3_FETCHING = "CHART3_FETCHING";
export const CHART3_ERROR = "CHART3_ERROR";
export const CHART3_GET_SUCCRESS = "CHART3_GET_SUCCRESS";
export const CHART4_FETCHING = "CHART4_FETCHING";
export const CHART4_ERROR = "CHART4_ERROR";
export const CHART4_GET_SUCCRESS = "CHART4_GET_SUCCRESS";
export const CHART5_FETCHING = "CHART5_FETCHING";
export const CHART5_ERROR = "CHART5_ERROR";
export const CHART5_GET_SUCCRESS = "CHART5_GET_SUCCRESS";
export const CHART6_FETCHING = "CHART6_FETCHING";
export const CHART6_ERROR = "CHART6_ERROR";
export const CHART6_GET_SUCCRESS = "CHART6_GET_SUCCRESS";
export const CHART7_FETCHING = "CHART7_FETCHING";
export const CHART7_ERROR = "CHART7_ERROR";
export const CHART7_GET_SUCCRESS = "CHART7_GET_SUCCRESS";
export const CHART8_FETCHING = "CHART8_FETCHING";
export const CHART8_ERROR = "CHART8_ERROR";
export const CHART8_GET_SUCCRESS = "CHART8_GET_SUCCRESS";

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


// คำพูดทั่วไป
export const PRINT_THIS_SECTION = "พิมพ์ส่วนนี้"

export const COMMUNITYS = [
    "ชุมชนมณีแก้ว",
    "ชุมชนดอนบน",
    "ชุมชนบางแสนทาวเวอร์",
    "ชุมชนตาลล้อม 1",
    "ชุมชนตาลล้อม 2",
    "ชุมชนบ้านเหมือง",
    "ชุมชนพัฒนา 2",
    "ชุมชนดอนนารา",
    "ชุมชนวัดกลางดอน",
    "ชุมชนแสนสุข",
    "ชุมชนมาบมะยม",
    "ชุมชนท้ายตลาด",
    "ชุมชนร่วมใจพัฒนา",
    "ชุมชนบางแสนบน",
    "ชุมชนหาดวอนนภา",
    "ชุมชนบางเป้ง",
    "ชุมชนหน้ามอ",
    "ชุมชนโชคดี",
    "ชุมชนสมใจนึก",
    "ชุมชนหน้าเทศบาล",
    "ชุมชนวัดแสนสุข",
    "ชุมชนมุขแสนเจริญ 1",
    "ชุมชนมุขแสนเจริญ 2",
    "ชุมชนเขาสามมุข",
    "ชุมชนบ้านแหลมแท่น",
  ];

export const EDUCATIONS = [
  "ไม่ได้เรียนหนังสือ",
  "ประถมศึกษา",
  "มัธยมศึกษา",
  "อนุปริญญา/ปวช./ปวส.",
  "ปริญญาตรี",
  "สูงกว่าปริญญาตรี",
]

export const TREATMENT = [
  "เบิกต้นสังกัด",
  "ชำระเงินเอง",
  "บัตรทอง",
  "บัตรผู้พิการ",
  "บัตรประกันสังคม",
  "อื่นๆ",
]