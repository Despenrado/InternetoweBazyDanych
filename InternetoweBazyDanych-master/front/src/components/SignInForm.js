import React, {useState} from 'react';

// Components
import {cleanErrors, Errors} from './Errors';

const Form = ({submitForm}) => {
    const [errors, updateErrors] = useState([]);
    const[isAutheticated, setisAutheticated] = useState(false);

    function login(e,updateErrors){
      //  setisAutheticated(true);
    //   console.log("loggedInUSer:" + isAutheticated);
    
      const res= submitForm(e, updateErrors)
       
    
    }
    return(
     
      <div className={"form__container"}>
       
            <Errors errors={errors}/>
            <form name={"signInForm"} className={"form"} onClick={() => cleanErrors(errors, updateErrors)}>
            <h1 className={"form__label"} htmlFor={"login"}>Sign in:</h1>
                <label className={"form__label"} htmlFor={"login"}>Login</label>
                <input className={"form__input"} type={"text"} placeholder={"Enter login..."} name={"login"} required></input>
                <label className={"form__label"} htmlFor={"password"}>Password</label>
                <input className={"form__input"} type={"password"} placeholder={"Enter password..."} name={"password"} required></input>

            </form>
             <button className={"form__button"} onClick={e => login(e, updateErrors)}>Submit</button> 
            
        </div>
        
    );
};

export default Form;