import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function AuthenticatedPrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  console.log("test");
  return user ? children : <Navigate to="/" />;
}

export default AuthenticatedPrivateRoute;
