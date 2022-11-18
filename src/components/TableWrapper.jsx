import React from 'react';
import TableComponent from './TableComponent';
import TableComponentItem from './TableComponentItem';

const tableHeaders = [
  { name: 'NOMBRE' },
  { name: 'TIPO' },
  { name: 'DESCRIPCION' },
  { name: 'CONSTRAINTS' },
  { name: 'DELETE' },
];

const dataList = [
  {
    name: 'test1',
    name: 'test2',
    name: 'test3',
    name: 'test4',
    name: 'test5',
  },
];

function TableWrapper({ title }) {
  return (
    <div className="table-wrapper">
      <h3 className="table-wrapper-title">{title}</h3>
      <TableComponent
        tableHeaders={tableHeaders}
        dataList={dataList}
        render={(element, index) => <TableComponentItem {...element}/>}
      />
    </div>
  );
}

export default TableWrapper;
