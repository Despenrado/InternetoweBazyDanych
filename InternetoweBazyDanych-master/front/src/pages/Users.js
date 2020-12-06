import React from "react";

// Components
import List from "../components/List";
import User from "../components/User";

// Variables
const url = "http://0.0.0.0:3102/admin/users";

const Users = () => {
  return (
    <section className={"users"}>
      <List url={url} child={User} />
    </section>
  );
};

export default Users;
