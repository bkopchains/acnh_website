import React from "react";
import Skeleton from 'react-loading-skeleton';

const SuggestionTable = ({ tableData = [] }) => {
  
    const tableRows = tableData.map((datum) => {
        return (
            <tr>
                {/* <td className="tableStart neuMorphismIn" style={{display: "flex", justifyContent: "center", alignContent: "center"}}><img src={datum.icon} width={25}/></td> */}
                <td className="neuMorphismIn">{datum.name}</td>
                <td className="neuMorphismIn">{datum.price}</td>
                {/* <td className="tableEnd neuMorphismIn">{datum.location}</td> */}
            </tr>
        )
    })

  return (
    tableData && tableData.length > 0 ?
    <table className="critterTable neuMorphismOut gradient-box" cellSpacing="5">
      <tr>
        {/* <th style={{width: "25px"}}></th> */}
        <th className="tableStart">Name</th>
        <th>Price</th>
        {/* <th className="tableEnd">Location</th> */}
      </tr>
      {tableRows}
    </table>
    :
    <table className="critterTable neuMorphismOut gradient-box" cellSpacing="5">
      <Skeleton/>
      <Skeleton count={5} />
    </table>
  );
};

export default SuggestionTable;
