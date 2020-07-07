import React from 'react';

const BugTable = ({bugData}) => {
  return (
    bugData &&
    <div className="neuMorphismOut" style={{display:"flex", flexDirection: "column", width: "400px"}}>
        <div className="neuMorphismIn critterImageContainer">
          <img src={bugData.image_uri} style={{width: "75%"}} title={bugData["catch-phrase"]}/>
        </div>
        <table className="critterTable pickerTable"  cellSpacing="5">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{bugData.name}</td>
            </tr>
            <tr>
              <th>Location: </th>
              <td>{bugData.availability.location} </td>
            </tr>
            <tr>
              <th>Sell Price:</th>
              <td>{bugData.price}</td>
            </tr>
            <tr>
              <th>Times:</th>
              <td>{bugData.availability.isAllDay ? "All Day" : bugData.availability.time}</td>
            </tr>
            <tr>
              <th>Months:</th>
              <td>{bugData.availability.isAllYear ? "All Year" : bugData.availability["month-northern"]}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default BugTable
