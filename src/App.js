import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Page404 from "./pages/Page404";
import DashboardPrivateRoute from "./utils/DashboardPrivateRoute";
import HomePrivateRoute from "./utils/HomePrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route
              path="/"
              element={
                <HomePrivateRoute>
                  <Home />
                </HomePrivateRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="dashboard"
              element={
                <DashboardPrivateRoute>
                  <Dashboard />
                </DashboardPrivateRoute>
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
