import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import SelectOption from "../components/SelectOption";
import SubmitButton from "../components/SubmitButton";
import "./styles/Signup.css";

function Signup() {
  return (
    <main>
      <section>
        <p id="head-1">START FOR FREE</p>
        <h1 id="head-2">
          Create new account<span style={{ color: "#1d90f3" }}>.</span>
        </h1>
        <p id="login-link">
          Already a member?<Link to="/login">Log in</Link>
        </p>
        <form id="form">
          <div className="flex-container">
            <InputField
              placeholder="First name"
              type="text"
              icon="fas fa-address-card"
            />
            <InputField
              placeholder="Last name"
              type="text"
              icon="fas fa-address-card"
            />
          </div>
          <div className="flex-container">
            <InputField
              placeholder="Email"
              type="email"
              icon="fas fa-envelope"
            />
            <InputField placeholder="Username" type="text" icon="fas fa-user" />
          </div>
          <InputField
            placeholder="Password"
            type="password"
            icon="fas fa-lock"
          />
          <div className="label-container">
            <label htmlFor="type">Account type:</label>
            <SelectField name="type">
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
