class LoadingModel {
  isLoading: boolean = true;
  mainLoading: boolean = false;
}

class loginModel {
  username: any =
    localStorage.getItem("username") === null
      ? ""
      : localStorage.getItem("username");
  password: any =
    localStorage.getItem("password") === null
      ? ""
      : localStorage.getItem("password");
  accountError: string = "";
  rememberMe: boolean = false;
  otp: string = "";
}
class dashboardModel {
  patients: number = 0;
  app_user: number = 0;
  symptoms_count: number = 0;
  treatmentcomponent_count: number = 0;
}
class patientModel {
  patientList:[]=[];
  _id: number = 0;
  EHS_1InitialDate: string = "";
  EHS_2InitialDate: string = "";
  phoneNo: string = "";
  EI: number = 0;
  HS: number = 4;
  USER_TYPE: string ="" ;
  patientId: string = "";
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  submittedAt: string = "";
  status: string = "";
  page:number =1;
  limit:number =10;
  count:number=0;
  search:string="";
}
class ReducerModel {
  loginReducer: loginModel = new loginModel();
  dashboardReducer: dashboardModel = new dashboardModel();
  patientReducer: patientModel = new patientModel();
}

export { LoadingModel, loginModel, ReducerModel, dashboardModel, patientModel };
