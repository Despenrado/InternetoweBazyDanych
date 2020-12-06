import React from "react";

// Components
import List from "../components/List";
import Run from "../components/Run";

// Variables

const runsApi = process.env.REACT_APP_UNSPLASH_URL+'/';

const Homepage = () => {
  return (
    <section className={"homepage"}>
      <a className={"user--text"}> Available Runs:</a>
      <List url={runsApi} child={Run} />
    </section>
  );
};

export default Homepage;
