import React from 'react';

function TableComponent({ tableHeaders, dataList, render }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>{dataList.map(render)}</tbody>
      </table>
    </div>
  );
}

export default TableComponent;
