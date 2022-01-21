import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "../screens/dashboardContainer/dashboard";
import AppUserListing from "../screens/dashboardContainer/appUserList";
import DashboardContainer from "../screens/dashboardContainer";
import PatientList from "../screens/dashboardContainer/patientLising";
import Treatment from "../screens/dashboardContainer/treatment";
import Login from "../screens/login";
import ForgotPassword from "../screens/login/ForgotPassword";
import MainContainer from "../screens/login/mainContainer";
import ResetLink from "../screens/login/ResetLink";
import ResetPassword from "../screens/login/ResetPassword";

function RouteData() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<MainContainer children={<Login />} />} />
        <Route
          path="/resetPassword"
          element={<MainContainer children={<ResetPassword />} />}
        />
        <Route
          path="/resetLink"
          element={<MainContainer children={<ResetLink />} />}
        />
        <Route
          path="/forgotPassword"
          element={<MainContainer children={<ForgotPassword />} />}
        />
        <Route
          path="/dashboard"
          element={<DashboardContainer children={<Dashboard />} />}
        />
        <Route
          path="/appUserListing"
          element={<DashboardContainer children={<AppUserListing />} />}
        />
          <Route
            path="/treatment"
            element={<DashboardContainer children={<Treatment />} />}
          />
        <Route
          path="/patientListing"
          element={<DashboardContainer children={<PatientList />} />}
        />
      </Routes>
    </Router>
  );
}

export default RouteData;
