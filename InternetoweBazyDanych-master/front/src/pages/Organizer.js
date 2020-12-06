import React from "react";

// Components
import Form from "../components/AddRunForm";

// Variables

const url = process.env.REACT_APP_UNSPLASH_URL+'/organizer/add';

// Functions
import { submitForm } from "../components/Fetch";

const validateForm = async (e, changeState) => {
  let errors = [];
  const form = document.forms["addRunForm"];

  if (form["name"].value.length < 8)
    errors.push({
      message: "Run name field has to contain at least 8 characters!",
      success: false,
    });
  if (!form["route"].value.length)
    errors.push({
      message: "Route id field cannot be empty!",
      success: false,
    });
  if (errors.length) changeState(errors);
  else {
    const data = {};
    data.name = form["name"].value;
    data.id_trasa = form["route"].value;
    data.data_bieg = form["date"].value;
    await submitForm(url, data, changeState);
    form["name"].value = "";
    form["route"].value = "";
  }
};

const Organizer = () => {
  return (
    <section className={"profile"}>
      <a className={"user--text"}>Add run:</a>
      <Form submitForm={validateForm} />
      <a className={"user__button"} href={"organizer/runs"}>
        <p className={"user--text user--button"}>Your runs</p>
      </a>
      <a className={"user__button"} href={"organizer/route"}>
        <p className={"user--text user--button"}>Add Route</p>
      </a>
    </section>
  );
};

export default Organizer;
