import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function NotAuthenticatedPrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  console.log("test");
  return user ? <Navigate to="/dashboard" /> : children;
}

export default NotAuthenticatedPrivateRoute;
