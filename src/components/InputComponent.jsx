import React from 'react';
import '@styles/Form.css';

function InputComponent({ value, onChange, type, name, placeholder }) {
  return (
    <input
      className="form-item text-item"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default InputComponent;
