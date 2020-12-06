import React from "react";

// Components
import List from "../components/List";
import Runner from "../components/Runner";

// Variables
const href = window.location.href.split("/");
// const url = `http://0.0.0.0:3102/organizer/runs/`;
const url = `http://0.0.0.0:3102/organizer/${href[href.length - 1]}/runners/`;
const OrganizerUsers = () => {
  return (
    <section className={"runs"}>
      <List url={url} child={Runner} />
    </section>
  );
};

export default OrganizerUsers;
