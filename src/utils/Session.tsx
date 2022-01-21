import Utils from ".";
export const setAuthorizationToken = (token?: string) => {
  if (token) {
    Utils.constants.axios.defaults.headers.common[
      "authorization"
    ] = `Bearer ${token}`;
  } else {
    Utils.constants.axios.defaults.headers.common["Authorization"] = "";
    delete Utils.constants.axios.defaults.headers.common["Authorization"];
  }
};
export const setApiKey = () => {
  const api_key = process.env.REACT_APP_API_KEY;
  Utils.constants.axios.defaults.headers.common[
    "api_key"
  ] = `${api_key?.toString()}`;
};
export const getUserIdToken = () => {
  return localStorage.getItem("authorization");
};
export const getAccessToken = () => {
  let accessToken = localStorage.getItem("authorization");
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }

  return accessToken;
};
