import React, { useState, useEffect } from "react";
const SelectInput = ({
  name,
  label,
  onChange,
  defaultValue,
  valueField,
  displayField,
  value,
  error,
  options,
  isrequired,
  valid
}) => {
  const [newlabel, setLabel] = useState(label);
  const [requiredMessage, setRequiredMessage] = useState("");
  const requiredMsg = "This field is is required";
  useEffect(() => {
    async function prepareLabel() {
      if (isrequired) {
        setLabel(
          <span>
            <span>{label}</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        );
      } else {
        setLabel(<span>{label}</span>);
      }
    }
    async function prepareRequiredMessage() {
      if (isrequired && !value) {
        setRequiredMessage(
          <div className="alert alert-danger">
            {error ? error : requiredMsg}
          </div>
        );
      }
    }
    prepareLabel();
    prepareRequiredMessage();
  }, [setLabel, setRequiredMessage]);
  return (
    <div className="form-group">
      <label htmlFor={name}>{newlabel}</label>
      <select
        name={name}
        value={value || defaultValue}
        onChange={onChange}
        className="form-control"
        isrequired={isrequired}
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
      {requiredMessage}
    </div>
  );
};

export default SelectInput;
