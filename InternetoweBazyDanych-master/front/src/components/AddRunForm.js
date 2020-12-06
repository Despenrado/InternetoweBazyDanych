import React, { useEffect, useState } from "react";
import Select from "react-select";
import { fetchData } from "../components/Fetch";
// Components
import { cleanErrors, Errors } from "./Errors";

const url=process.env.REACT_APP_UNSPLASH_URL+'/organizer/route/all'

const Form = ({ submitForm }) => {
  // const Routes=[
  //     {value:'gsegsg', label: 'rgsdgsgs',color:'#00B8D9'}
  //     ];

  const [fetchedData, updateData] = useState([]);
  useEffect(() => {
    fetchData(updateData, url);
  }, []);
  const Routes = [];
  const [errors, updateErrors] = useState([]);

  fetchedData.map((data, index) => {
    Routes.push({
      value: data.TRASA_ID,
      label: `ID: ${data.ID_TRASA} City: ${data.MIASTO_TRASA} Start: ${data.POCZATEK_TRASA} Finish: ${data.KONIEC_TRASA} Km: ${data.DLUGOSC_TRASA}`,
      color: "#00B8D9",
    });
  });

  return (
    <div className={"form__container"}>
      <Errors errors={errors} />
      <form
        name={"addRunForm"}
        className={"form"}
        onClick={() => cleanErrors(errors, updateErrors)}
      >
        <label className={"form__label"} htmlFor={"name"}>
          Run name
        </label>
        <input
          className={"form__input"}
          type={"text"}
          placeholder={"Enter run name..."}
          name={"name"}
          required
        ></input>
        <label className={"form__label"} htmlFor={"route"}>
          Choose ID route
        </label>
        <Select className={"form_input"} options={Routes} />
        <input
          className={"form__input"}
          type={"text"}
          placeholder={"Enter route ID"}
          name={"route"}
          required
        ></input>
        <label className={"form__label"} htmlFor={"date"}>
          Run date
        </label>
        <input
          className={"form__input"}
          type={"date"}
          name={"date"}
          required
        ></input>
      </form>
      <button
        className={"form__button"}
        onClick={(e) => submitForm(e, updateErrors)}
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
