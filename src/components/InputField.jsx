import "./InputField.css";

function InputField({ icon, type, value, placeholder, name, ...props }) {
  return (
    <div className="input-field" {...props}>
      <input type={type} value={value} placeholder={placeholder} name={name} />
      <i className={icon} />
    </div>
  );
}

export default InputField;
