import React from "react";
const SelectInput = ({
  name,
  label,
  onChange,
  defaultValue,
  valueField,
  displayField,
  value,
  error,
  options
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value || defaultValue}
        onChange={onChange}
        className="form-control"
      >
        <option value="">Please select</option>
        {options.map(option => {
          return (
            <option key={option[valueField]} value={option[valueField]}>
              {option[displayField]}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectInput;
