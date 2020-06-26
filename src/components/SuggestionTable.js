import React from "react";

const SuggestionTable = ({ tableData = [] }) => {
  
    const tableRows = tableData.map((datum) => {
        return (
            <tr>
                <td className="tableStart neuoMorphismIn">{datum.name}</td>
                <td className="neuoMorphismIn">{datum.price}</td>
                <td className="tableEnd neuoMorphismIn">{datum.location}</td>
            </tr>
        )
    })

  return (
    <table className="critterTable neuoMorphismOut" cellSpacing="5">
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
