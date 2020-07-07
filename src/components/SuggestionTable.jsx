import React from "react";

const SuggestionTable = ({ tableData = [] }) => {
  
    const tableRows = tableData.map((datum) => {
        return (
            <tr>
                <td className="tableStart neuMorphismIn">{datum.name}</td>
                <td className="neuMorphismIn">{datum.price}</td>
                <td className="tableEnd neuMorphismIn">{datum.location}</td>
            </tr>
        )
    })

  return (
    <table className="critterTable neuMorphismOut" cellSpacing="5">
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
