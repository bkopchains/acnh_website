import React from "react";

const BugTable = ({bugData}) => {
  return (
    <table className="critterTable pickerTable neuoMorphismOut" cellSpacing="5">
      <tr>
        <th>Name:</th>
        <td>{bugData.name}</td>
      </tr>
      <tr>
        <th>Location: </th>
        <td>{bugData.location} </td>
      </tr>
      <tr>
        <th>Sell Price:</th>
        <td>{bugData.price}</td>
      </tr>
      <tr>
        <th>Times:</th>
        <td>{bugData.times && bugData.times.text}</td>
      </tr>
      <tr>
        <th>Months:</th>
        <td>{bugData.months && bugData.months.northern.text}</td>
      </tr>
    </table>
  );
};

export default BugTable