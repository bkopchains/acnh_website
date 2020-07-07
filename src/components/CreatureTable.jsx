import React from 'react';

const CreatureTable = ({creatureData}) => {
  return (
    creatureData &&
    <div className="neuMorphismOut citterContainer">
        <div className="neuMorphismIn critterImageContainer">
          <img src={creatureData.image_uri} style={{maxWidth: "250px"}} title={creatureData["catch-phrase"]}/>
        </div>
        <table className="critterTable pickerTable"  cellSpacing="5">
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{creatureData.name}</td>
            </tr>
            <tr>
              <th>Size:</th>
              <td>{creatureData.shadow}</td>
            </tr>
            <tr>
              <th>Sell Price:</th>
              <td>{creatureData.price}</td>
            </tr>
            <tr>
              <th>Times:</th>
              <td>{creatureData.availability.isAllDay ? "All Day" : creatureData.availability.time}</td>
            </tr>
            <tr>
              <th>Months:</th>
              <td>{creatureData.availability.isAllYear ? "All Year" : creatureData.availability["month-northern"]}</td>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default CreatureTable
