import React, { useState, useEffect, useContext } from "react";
import { ProductContext } from "../products/contexts/ProductContext";

const TextInput = ({
  name,
  label,
  onChange,
  placeHolder,
  value,
  error,
  valid,
  isrequired
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  const requiredMsg = "This field is is required";
  const [newlabel, setLabel] = useState(label);
  const [requiredMessage, setRequiredMessage] = useState("");

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
        console.log("name value", name, value);
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
    <div className={wrapperClass}>
      <label htmlFor={name}>{newlabel}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          placeholder={placeHolder}
          onChange={onChange}
          value={value}
          isrequired={isrequired}
        />
        {requiredMessage}
      </div>
    </div>
  );
};

export default TextInput;
