import React from "react";

// Components
import List from "../components/List";
import Run from "../components/OrgRun";

// Variables
const url = "http://0.0.0.0:3102/organizer/runs";

const Runs = () => {
  return (
    <section className={"runs"}>
      <List url={url} child={Run} />
    </section>
  );
};

export default Runs;
