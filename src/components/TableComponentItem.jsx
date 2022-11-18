import React from 'react';

function TableComponentItem(props) {
  console.log('table item props', props);
  return (
    <tr>
      {/* {props.dataFields.map((data) => ( */}
        <td>test</td>
        <td>test</td>
        <td>test</td>
        <td>test</td>
      {/* ))} */}
    </tr>
  );
}

export default TableComponentItem;
