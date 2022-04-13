import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function DashboardPrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  console.log("test");
  return user ? children : <Navigate to="/" />;
}

export default DashboardPrivateRoute;
