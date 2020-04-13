import React from 'react';

const FishTable = ({fishData}) => {
  return (
    <table className="critterTable pickerTable">
      <tr>
        <th>Name:</th>
        <td>{fishData.name}</td>
      </tr>
      <tr>
        <th>Location: </th>
        <td>{fishData.location} </td>
      </tr>
      <tr>
        <th>Size:</th>
        <td>{fishData.shadow_size}</td>
      </tr>
      <tr>
        <th>Sell Price:</th>
        <td>{fishData.price}</td>
      </tr>
      <tr>
        <th>Times:</th>
        <td>{fishData.times && fishData.times.text}</td>
      </tr>
      <tr>
        <th>Months:</th>
        <td>{fishData.months && fishData.months.northern.text}</td>
      </tr>
    </table>
  );
};

export default FishTable
