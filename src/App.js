import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";
import AuthenticatedPrivateRoute from "./utils/AuthenticatedPrivateRoute";
import NotAuthenticatedPrivateRoute from "./utils/NotAuthenticatedPrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <NotAuthenticatedPrivateRoute>
                  <Home />
                </NotAuthenticatedPrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <NotAuthenticatedPrivateRoute>
                  <Login />
                </NotAuthenticatedPrivateRoute>
              }
            />
            <Route
              path="signup"
              element={
                <NotAuthenticatedPrivateRoute>
                  <Signup />
                </NotAuthenticatedPrivateRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <AuthenticatedPrivateRoute>
                  <Dashboard />
                </AuthenticatedPrivateRoute>
              }
            />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
