import React from "react";
import { Link } from "react-router-dom";

const AllCustomersRow = ({ name, id }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{<Link to={`/customers/${id}`}>OPEN</Link>}</td>
      <td>{id}</td>
    </tr>
  );
};

export default AllCustomersRow;