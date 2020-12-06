import React from "react";

// Components
import List from "../components/List";
import UnacceptedRun from "../components/UnacceptedRun";

// Variables
const url = "http://0.0.0.0:3102/admin/runs";

const Runs = () => {
  return (
    <section className={"runs"}>
      <List url={url} child={UnacceptedRun} />
    </section>
  );
};

export default Runs;
