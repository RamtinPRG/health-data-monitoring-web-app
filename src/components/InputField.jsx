import "./styles/InputField.css";

function InputField({
  icon,
  type,
  value,
  placeholder,
  name,
  required,
  ...props
}) {
  return (
    <div className="input-field" {...props}>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        required={required}
      />
      <i className={icon} />
    </div>
  );
}

export default InputField;
