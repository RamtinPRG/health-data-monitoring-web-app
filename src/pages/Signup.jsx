import { useContext } from "react";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SelectOption from "../components/SelectOption";
import SubmitButton from "../components/SubmitButton";
import AuthContext from "../contexts/AuthContext";

import "./styles/Signup.css";

function Signup() {
  const { signupUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    signupUser(e);
  };
  return (
    <main className="signup">
      <section>
        <p id="head-1">START FOR FREE</p>
        <h1 id="head-2">
          Create new account<span style={{ color: "#1d90f3" }}>.</span>
        </h1>
        <p id="login-link">
          Already a member?<Link to="/login">Log in</Link>
        </p>
        <form id="form" onSubmit={handleSubmit}>
          <div className="flex-container">
            <InputField
              placeholder="First name"
              type="text"
              icon="fas fa-address-card"
              name="first_name"
            />
            <InputField
              placeholder="Last name"
              type="text"
              icon="fas fa-address-card"
              name="last_name"
            />
          </div>
          <div className="flex-container">
            <InputField
              placeholder="Email"
              type="email"
              icon="fas fa-envelope"
              name="email"
            />
            <InputField
              placeholder="Username"
              type="text"
              icon="fas fa-user"
              name="username"
            />
          </div>
          <InputField
            placeholder="Password"
            type="password"
            icon="fas fa-lock"
            name="password"
          />
          <div className="label-container">
            <label htmlFor="type">Account type:</label>
            <SelectField id="type" name="account_type">
              <SelectOption value="patient">Patient</SelectOption>
              <SelectOption value="doctor">Doctor</SelectOption>
              <SelectOption value="inspector">Inspector</SelectOption>
            </SelectField>
          </div>
          <SubmitButton value="Create account" />
        </form>
      </section>
    </main>
  );
}

export default Signup;
