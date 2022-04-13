import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <span>START FOR FREE</span>
      <h1>Create new account.</h1>
      <p>
        Already a member?<Link to="/signup">Sign in</Link>
      </p>
    </main>
  );
}

export default Login;
