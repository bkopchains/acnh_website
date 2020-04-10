import React from "react";

const SuggestionTable = ({ tableData = [] }) => {
  
    const tableRows = tableData.map((datum) => {
        return (
            <tr>
                <td>{datum.name}</td>
                <td>{datum.price}</td>
                <td>{datum.location}</td>
            </tr>
        )
    })

  return (
    <table className="critterTable">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Location</th>
      </tr>
      {tableRows}
    </table>
  );
};

export default SuggestionTable;
