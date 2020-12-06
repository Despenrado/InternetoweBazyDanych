import React from "react";

// Components
import List from "../components/List";

// Variables
const url = "http://0.0.0.0:3102/finished/";

const Homepage = () => {
  return (
    <section className={"homepage"}>
      <List url={url} />
    </section>
  );
};

export default Homepage;
