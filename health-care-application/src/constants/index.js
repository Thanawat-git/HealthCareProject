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

export const FETCH_DATA_FORM_SERVER = 'FETCH_DATA_FORM_SERVER';

// Search elderly
export const FOUND_ELD = 'FOUND_ELD';
export const SELECT_ELD = 'SELECT_ELD';
export const HTTP_ELD_FETCHING = "HTTP_ELD_FETCHING";
export const HTTP_ELD_SUCCRESS = "HTTP_ELD_SUCCRESS";
export const HTTP_ELD_SELECTED = "HTTP_ELD_SELECTED";
export const HTTP_ELD_FAILED = "HTTP_ELD_FAILED";
// // Login Page
// export const APP_INIT = "APP_INIT";


// // Login Page
// export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
// export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
// export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// // Register Page
// export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
// export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
// export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// // Stock Page
// export const HTTP_STOCK_FETCHING = "HTTP_STOCK_FETCHING";
// export const HTTP_STOCK_SUCCESS = "HTTP_STOCK_SUCCESS";
// export const HTTP_STOCK_FAILED = "HTTP_STOCK_FAILED";

// // Stock Edit Page
// export const HTTP_STOCK_EDIT_FETCHING = "HTTP_STOCK_EDIT_FETCHING";
// export const HTTP_STOCK_EDIT_SUCCESS = "HTTP_STOCK_EDIT_SUCCESS";
// export const HTTP_STOCK_EDIT_FAILED = "HTTP_STOCK_EDIT_FAILED";
// export const HTTP_STOCK_EDIT_INITIALED = "HTTP_STOCK_EDIT_INITIALED";

// // Transaction Edit Page
// export const HTTP_TRANSACTION_FETCHING = "HTTP_TRANSACTION_FETCHING";
// export const HTTP_TRANSACTION_SUCCESS = "HTTP_TRANSACTION_SUCCESS";
// export const HTTP_TRANSACTION_FAILED = "HTTP_TRANSACTION_FAILED";

// // Shop Page
// export const HTTP_SHOP_FETCHING = "HTTP_SHOP_FETCHING";
// export const HTTP_SHOP_SUCCESS = "HTTP_SHOP_SUCCESS";
// export const HTTP_SHOP_FAILED = "HTTP_SHOP_FAILED";

// export const SHOP_UPDATE_ORDER = "SHOP_UPDATE_ORDER";
// export const SHOP_UPDATE_PAYMENT = "SHOP_UPDATE_PAYMENT";

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


export const apiBase =  "http://10.80.6.136:3001";
export const apiEld = "http://10.80.6.136:3001/elder";

export const YES = 'YES'
export const NO = 'NO'
export const OK = 'ok'
export const NOK = 'nok'

export const server = {    
    LOGIN_URL : `authen/login`,    
    REGISTER_URL : `authen/register`,  
    PRODUCT_URL : `stock/product`,    
    TRANSACTION_URL : `transaction`,    
    REPORT_URL: `stock/report`,    
    LOGIN_PASSED : `yes`,
}

