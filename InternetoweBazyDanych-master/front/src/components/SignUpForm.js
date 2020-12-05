import React, {useState} from 'react';
import Select from 'react-select'

// Components
import {cleanErrors, Errors} from './Errors';

const Form = ({submitForm}) => {
    const [errors, updateErrors] = useState([]);
    const options = [
        {value: 'runner', label: 'Runner'},
        {value: 'organizer', label: 'Organizer'}
    ]
    return(
        <div className={"form__container"}>
            <Errors errors={errors}/>
            <form name={"signUpForm"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
            <h1 className={"form__label"} >Register: </h1>
                <label className={"form__label"} htmlFor={"login"}>Login</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter login..."} name={"login"} required></input>
                <label className={"form__label"} htmlFor={"firstName"}>First name</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter first name..."} name={"firstName"} required></input>
                <label className={"form__label"} htmlFor={"lastName"}>Last name</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter last name..."} name={"lastName"} required></input>
                <label className={"form__label"} htmlFor={"birthDate"}>Birth date</label>
                <input className={"form__input"} type={"date"} name={"birthDate"} required></input>
                <label className={"form__label"} htmlFor={"password1"}>Password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password1"} required></input>
                <label className={"form__label"} htmlFor={"password2"}>Confirm password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password2"}></input>
                <select className={"form_input"} name={"type"}>
                    <option value="">Runner</option>
                    <option value="organizator">Organizer</option>
                </select>
                {/* <Select className={"form_select"} options={options}/> */}
                
            </form>
            <button className={"form__button"}   onClick={e => submitForm(e, updateErrors)}>Submit</button>
        </div>
    );
};

export default Form;