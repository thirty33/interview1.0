import React from 'react';
import '@styles/App.css';
import FormComponent from './formComponent';
import HeaderComponent from './HeaderComponent';
import TableWrapper from './TableWrapper';

function App(props) {
  return (
    <>
      <HeaderComponent onClick={() => {}}/>
      <FormComponent></FormComponent>
      <TableWrapper title={'Atributos'}/>
    </>
  );
}

export default App;
