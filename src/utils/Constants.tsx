import axios from "axios";
import { setAuthorizationToken, getUserIdToken, setApiKey } from "./Session";


const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
  headers: {
    IP: "127.0.0.1",
    "Content-Type": "application/json",
    
  },
});
const showAlertSeconds = 4;
const api_error_code = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 419,
  validationError: 400,
  emailNotVerified: 403,
};
const api_success_code = {
  postSuccess: 201,
  success: 200,
};
const user_type = {
  SUB_ADMIN: 2,
  ADMIN: 1,
};
const table_actions = {
  SEARCH: "search",
  CHANGE_PAGE: "changePage",
  ON_SEARCH_CLOSE: "onSearchClose",
  CHANGE_ROWS_PER_PAGE: "changeRowsPerPage",
};
const constant = {
  setAuthorizationToken,
  setApiKey,
  getUserIdToken,
  axios: $axios,
  showAlertSeconds,
  api_error_code,
  api_success_code,
};
export default constant;
