import React from 'react';
import '@styles/Form.css';

function TextAreaComponent({ value, onChange, type, name, placeholder }) {
  return (
    <textarea
      className="form-item text-area-item"
      rows={'10'}
      cols={'5'}
      placeholder={placeholder}
      disabled={false}
      value={value}
      name={name}
      onChange={onChange}
      maxLength={'1000'}
    />
  );
}

export default TextAreaComponent;
