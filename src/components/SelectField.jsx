import "./SelectOptionField.css";

function SelectField({ children, ...props }) {
  return (
    <select className="select-field" {...props}>
      {children}
    </select>
  );
}

export default SelectField;
