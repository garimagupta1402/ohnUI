import Utils from '../utils'


const checkUserValidation = (data: any) => {
  if (data) {
    const { statusCode } = data,
      { sessionExpired, unauthorized, accessDenied } =
        Utils.constants.api_error_code;
    if (statusCode) {
      return (
        statusCode === sessionExpired ||
        statusCode === unauthorized ||
        statusCode === accessDenied
      );
    }
    return false;
  }
  return false;
};

export const getAccessTokenUsingRefreshToken = () => {
  if (!navigator.onLine) {
    //check if user is online or not
    Utils.showAlert(1, "Please check your internet connection!");
    // setSubmitting(false);
    return;
  }

  if (localStorage.getItem("refreshToken") !== null) {
    const dataToSend = `?refreshToken=${localStorage.getItem("refreshToken")}`;
    Utils.api.getApiCall(
      "refreshToken",
      dataToSend,
      (respData: any) => {
        let { data } = respData;
        console.log(data.statusCode);
        if (
          data.statusCode ===
          (Utils.constants.api_success_code.success ||
            Utils.constants.api_success_code.postSuccess)
        ) {
          localStorage.setItem("accessToken", data.data.accessToken);
          localStorage.setItem("refreshToken", data.data.refreshToken);
     
          Utils.constants.setAuthorizationToken(data.data.accessToken);
   
          // window.location.reload();
        } else {
          // setSubmitting(false);
          // Utils.showAlert(1, data.message);
          // logout();
          console.log('logout');
          
        }
      },
      (error: any) => {
        // setSubmitting(false);
        // let { data } = error;
        // Utils.showAlert(1, data.message);
        // logout();
            console.log("logout");
      }
    );
    // };
  } else {
    // logout();
        console.log("logout");
  }
};
const getApiCall = (
  endPoint: string,
  params: any = "",
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });
  // @ts-ignore

  Utils.constants.setAuthorizationToken(localStorage.getItem("accessToken")?.toString());
  Utils.constants.setApiKey();
  Utils.constants.axios
    .get(process.env.REACT_APP_API_DOMAIN + endPoint + params, {})
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;

        if (checkUserValidation(data)) {
          //if user session expired
          // debugger;
          console.log("session expired for user");
          //   Utils.showAlert(2, data.message);
          setTimeout(() => {
            // logOutApiCall();
            if (localStorage.getItem("accessToken") !== null) {
              getAccessTokenUsingRefreshToken();
            }
          }, 1000);
          // errorCallback(error.response);
        } else {
          console.log("response: ", error.response);
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};
  const postApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constants.setAuthorizationToken(localStorage.getItem("accessToken" )?.toString());
  Utils.constants.setApiKey();
  Utils.constants.axios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired
          setTimeout(() => {
            // logOutApiCall();
            if (localStorage.getItem("accessToken") !== null) {
              getAccessTokenUsingRefreshToken();
            }
          }, 1000);
          // errorCallback(error.response);
        } else {
          console.log("response: ", error.response);
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
}
const patchApiCall = (
  endPoint: string,
  params: object,
  successCallback: Function,
  errorCallback: Function
) => {
  console.log({ endPoint, params });
  // @ts-ignore
  Utils.constants.setAuthorizationToken(localStorage.getItem("accessToken"));
  Utils.constants.axios
    .patch(endPoint, params)
    .then((response: any) => {
      console.log("response: ", response);
      successCallback(response);
    })
    .catch((error: any) => {
      console.log("API Call error", error);
      if (error.code === "ECONNABORTED") {
        let payload = {
          data: {
            statusCode: 408,
          },
        };
        errorCallback(payload);
      } else if (error.response) {
        let data = error.response.data;
        if (checkUserValidation(data)) {
          //if user session expired
          // console.log('session expired for user');
          // //   Utils.showAlert(2, data.message);
          // setTimeout(() => {
          //     if (localStorage.getItem('accessToken') !== null) {
          //         logOutApiCall();
          //     }
          // }, 1000);
          setTimeout(() => {
            // logOutApiCall();
            if (localStorage.getItem("accessToken") !== null) {
              getAccessTokenUsingRefreshToken();
            }
          }, 1000);
          // errorCallback(error.response);
        } else {
          console.log("response: ", error.response);
          errorCallback(error.response);
        }
      } else if (!error.response) {
        let payload = {
          data: {
            statusCode: "",
            message: "Please try again later",
          },
        };
        errorCallback(payload);
      }
    });
};

export default{
    postApiCall,
    patchApiCall,
    getApiCall
}