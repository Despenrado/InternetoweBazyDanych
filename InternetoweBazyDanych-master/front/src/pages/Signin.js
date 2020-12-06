import React, { useState } from 'react';
import CookieConsent from "react-cookie-consent";

// Components
import Form from '../components/SignInForm';

// Functions
import {submitForm} from "../components/Fetch";


// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+'/api/login';
let log=false;
const validateForm = async (e, changeState) => {
    let errors = [];
    const form = document.forms['signInForm'];
    if(form['login'].value.length < 8)
        errors.push({
            message: 'Login field cannot has less than 8 characters!',
            success: false
        });
    if(!form['password'].value.length)
        errors.push({
            message: 'Password field cannot has less than 8 characters!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.login = form['login'].value;
        data.pass = form['password'].value;
        let redirect = await submitForm(url, data, changeState);
       
       // console.log(redirect)
        form['login'].value = '';
        form['password'].value = '';
        localStorage.setItem('loged', redirect.loged);
        localStorage.setItem('type', redirect.type);
        localStorage.setItem('login',redirect.login)
        const {token,refreshToken} = redirect.login;
        if(redirect.success) {
           localStorage.setItem('token',token);
           localStorage.setItem('refreshToken',refreshToken);
          window.location.href = 'http://127.0.0.1:3000/';
        }
    }
};

const SignIn = () => {
    
    return(
      <section className={"sign"}>
          
        <Form submitForm={validateForm}/>
        <CookieConsent
  location="bottom"
  buttonText="Ok!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>We use cookies in this website to give you the best authentication</span>
</CookieConsent>
      
      </section>
    );
}

export default SignIn;