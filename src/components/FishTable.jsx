import React from 'react';

const FishTable = ({fishData}) => {
  return (
    fishData &&
    <div className="neuMorphismOut critterContainer">
        <div className="neuMorphismIn critterImageContainer">
          <img src={fishData.image_uri} style={{maxWidth: "250px"}} title={fishData["catch-phrase"]}/>
        </div>
        <table className="critterTable pickerTable"  cellSpacing="5">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{fishData.name}</td>
            </tr>
            <tr>
              <th>Location: </th>
              <td>{fishData.availability.location} </td>
            </tr>
            <tr>
              <th>Size:</th>
              <td>{fishData.shadow}</td>
            </tr>
            <tr>
              <th>Sell Price:</th>
              <td>{fishData.price}</td>
            </tr>
            <tr>
              <th>Times:</th>
              <td>{fishData.availability.isAllDay ? "All Day" : fishData.availability.time}</td>
            </tr>
            <tr>
              <th>Months:</th>
              <td>{fishData.availability.isAllYear ? "All Year" : fishData.availability["month-northern"]}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default FishTable
