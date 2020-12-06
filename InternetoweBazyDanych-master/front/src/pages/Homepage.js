import React from "react";

// Components
import List from "../components/List";
import Run from "../components/Run";

// Variables
const runsApi = "http://0.0.0.0:3102/";

const Homepage = () => {
  return (
    <section className={"homepage"}>
      <a className={"user--text"}> Available Runs:</a>
      <List url={runsApi} child={Run} />
    </section>
  );
};

export default Homepage;
