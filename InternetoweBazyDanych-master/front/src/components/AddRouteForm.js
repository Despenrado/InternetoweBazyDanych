import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {fetchData} from '../components/Fetch';
// Components
import {cleanErrors, Errors} from './Errors';

const url='http://127.0.0.1:3102/organizer/route/all'

const Form = ({submitForm}) => {
    
    const [errors, updateErrors] = useState([]);
    
   

    return(
        <div className={"form__container"}>
           
            <form name={"addRouteForm"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
                <label className={"form__label"} htmlFor={"name"}>Start: </label>
                <input className={"form__input"} type={"text"} placeholder={"Enter route start..."} name={"start"} required></input>
                <label className={"form__label"} htmlFor={"route"}>End: </label>
                <input className={"form__input"} type={"text"} placeholder={"Enter route end..."} name={"end"} required></input>
                <label className={"form__label"} htmlFor={"date"}>City: </label>
                <input className={"form__input"} type={"text"} placeholder={"City..."} name={"city"} required></input>
                <label className={"form__label"} htmlFor={"date"}>Length: </label>
                <input className={"form__input"} type={"number"} placeholder={"Length"} name={"length"} required></input>
            </form>
            <button className={"form__button"} onClick={e => submitForm(e, updateErrors)}>Submit</button>
        </div>
    );
};

export default Form;