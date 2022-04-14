import "./styles/SubmitButton.css";

function SubmitButton({ value }) {
  return <input className="submit-button" type="submit" value={value} />;
}

export default SubmitButton;
