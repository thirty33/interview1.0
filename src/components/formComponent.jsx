import React, { useState } from 'react';
import InputComponent from './InputComponent';
import TextAreaComponent from './TextAreaComponent';
import '@styles/Form.css';

function formComponent(props) {
  const [formState, setFormState] = useState({});

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form-container">
      <InputComponent
        value={'test'}
        placeholder={'test'}
        type={'text'}
        name={'test'}
        onChange={onChange}
      />

      <TextAreaComponent
        value={'test'}
        placeholder={'test'}
        type={'text'}
        name={'test'}
        onChange={onChange}
      />
    </form>
  );
}

export default formComponent;
