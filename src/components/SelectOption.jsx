function SelectOption({ children, ...props }) {
  return (
    <option className="select-field-option" {...props}>
      {children}
    </option>
  );
}

export default SelectOption;
