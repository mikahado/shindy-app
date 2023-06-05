import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "./context/user";

const CustomerNameEdit = ({ id, setNameFlag }) => {
  const [name, setName] = useState("");

  const { allCustomers, editCustomerName } = useContext(UserContext);

  useEffect(() => {
    const storedCustomer = allCustomers.find((p) => p.id === id);
    if (storedCustomer) {
      setName(storedCustomer.username);
    }
  }, [allCustomers, id])

  const handleSubmit = (e) => {
    e.preventDefault()

    editCustomerName({
      id: id,
      username: name,
    });
    setNameFlag()
  };

  return (
    <div>
      <hr />
      <p>Edit client name:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="integer"
          id="count"
          value={name}
          // placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        <button className="button1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomerNameEdit;