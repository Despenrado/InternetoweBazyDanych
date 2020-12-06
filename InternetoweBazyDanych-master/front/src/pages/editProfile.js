import React, { useState } from "react";

// Components
import List from "../components/List";
import User from "../components/User";
import EditUserForm from "../components/EditUserForm";
import { submitForm } from "../components/Fetch";

const url = `http://0.0.0.0:3102/profile/${localStorage.getItem("login")}`;

import { updateUser } from "../components/Fetch";

const validateForm = async (e, changeState) => {
  let errors = [];
  const form = document.forms["editUserForm"];
  if (!form["firstName"].value.length)
    errors.push({
      message: "First name field cannot be empty!",
      success: false,
    });
  if (!form["lastName"].value.length)
    errors.push({
      message: "Last name field cannot be empty!",
      success: false,
    });
  else {
    const data = {};
    data.first_name = form["firstName"].value;
    data.last_name = form["lastName"].value;
    data.birth_date = form["birthDate"].value;
    await updateUser(url, data, changeState);
    form["firstName"].value = "";
    form["lastName"].value = "";
  }
};

const EditProfile = () => {
  //const [form,showForm] = useState(true)

  return (
    <section className={"editProfile"}>
      <a className={"user--text"}>Edit Profile:</a>

      <EditUserForm submitForm={validateForm} />
    </section>
  );
};
export default EditProfile;
