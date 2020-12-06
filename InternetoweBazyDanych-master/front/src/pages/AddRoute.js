import React, {useEffect, useState} from 'react';
import Select from 'react-select'
import {submitForm} from '../components/Fetch';
// Components

import Form from '../components/AddRouteForm';

const validateForm = async (e, changeState) => {
        let errors = [];
        const form = document.forms['addRouteForm'];
        // if(!form['firstName'].value.length)
        //     errors.push({
        //         message: 'First name field cannot be empty!',
        //         success: false
        //     });
        // if(!form['lastName'].value.length)
        //     errors.push({
        //         message: 'Last name field cannot be empty!',
        //         success: false
        //     });
        // if(errors.length)
        //     changeState(errors);
        // else {
            const data = {}
            data.start = form['start'].value;
            data.end = form['end'].value;
            data.city = form['city'].value;
            data.length = form['length'].value;
            await submitForm(process.env.REACT_APP_UNSPLASH_URL+`/organizer/route/add`, data, changeState);
            
        }
    //};

const AddRoute = () => {
    return(
      <section className={'AddRoute'}>
          <a className={'user--text'}>Add route:</a>
            <Form submitForm={validateForm}/>
         
    
      </section>
    );
}

export default AddRoute;