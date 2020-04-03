import React from "react";
// import "./style.css";

function EmployeeRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.occupation}</td>
      <td>{props.location}</td>
    </tr>
  );
}

export default EmployeeRow;

// <div className="img-container">
//  <img alt={props.name} src={props.image} />
// </div>