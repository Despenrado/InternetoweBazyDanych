import React from "react";

// Components
import List from "../components/List";
import Runner from "../components/Runner";
import UserToFinish from "../components/UserToFinish";
import SubmitForm from "../components/Fetch";
// Variables
const href = window.location.href.split("/");
// const url = `http://0.0.0.0:3102/organizer/runs/`;
const url = `http://0.0.0.0:3102/organizer/${href[href.length - 1]}/runners/`;
const FinishRun = () => {
  const id = href[href.length - 1];
  localStorage.setItem("id", id);

  return (
    <section className={"runs"}>
      <List
        url={`http://0.0.0.0:3102/organizer/${id}/runners/`}
        child={UserToFinish}
      />
    </section>
  );
};

export default FinishRun;
