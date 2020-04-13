import React from "react";

const SuggestionTable = ({ tableData = [] }) => {
  
    const tableRows = tableData.map((datum) => {
        return (
            <tr>
                <td className="tableStart">{datum.name}</td>
                <td>{datum.price}</td>
                <td className="tableEnd">{datum.location}</td>
            </tr>
        )
    })

  return (
    <table className="critterTable">
      <tr>
        <th className="tableStart">Name</th>
        <th>Price</th>
        <th className="tableEnd">Location</th>
      </tr>
      {tableRows}
    </table>
  );
};

export default SuggestionTable;
