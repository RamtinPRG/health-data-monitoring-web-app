import { useContext } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import AuthContext from "../contexts/AuthContext";
import "./styles/Login.css";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    loginUser(e);
  };
  return (
    <main className="login">
      <section>
        {/* <p id="head-1">START FOR FREE</p> */}
        <h1 id="head-2">
          Welcome back<span style={{ color: "#1d90f3" }}>!</span>
        </h1>
        <p id="login-link">
          Don't have an account?<Link to="/signup">Sign up</Link>
        </p>
        <form id="form" onSubmit={handleSubmit}>
          {/* <div className="flex-container"> */}
          <InputField
            placeholder="Username"
            type="text"
            icon="fas fa-user"
            name="username"
          />
          <InputField
            placeholder="Password"
            type="password"
            icon="fas fa-lock"
            name="password"
          />
          {/* </div> */}
          <SubmitButton value="Log in" />
        </form>
      </section>
    </main>
  );
}

export default Login;
