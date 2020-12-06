import React, {useState} from 'react';

// Components
import List from "../components/List";
import User from "../components/User";

import EditUserForm from "../components/EditUserForm";
import {submitForm} from "../components/Fetch";
import AboutMe from"../components/AboutMe";
// Variables
const url = 'http://127.0.0.1:3102/profile';

// // Functions
// import {updateUser} from "../components/Fetch";

// const validateForm = async (e, changeState) => {
//     let errors = [];
//     const form = document.forms['editUserForm'];
//     if(!form['firstName'].value.length)
//         errors.push({
//             message: 'First name field cannot be empty!',
//             success: false
//         });
//     if(!form['lastName'].value.length)
//         errors.push({
//             message: 'Last name field cannot be empty!',
//             success: false
//         });
//     if(errors.length)
//         changeState(errors);
//     else {
//         const data = {}
//         data.first_name = form['firstName'].value;
//         data.last_name = form['lastName'].value;
//         data.birth_date = '1998-11-18';
//         await updateUser(url, data, changeState);
//         form['firstName'].value = '';
//         form['lastName'].value = '';
//     }
// };

const Profile = () => {
   
   // const [form, showForm] = useState(true);
   const [form] = useState(true);
  
    return (
        <section className={'profile'}>
            {
            //  (!form?(<List url={url} child={User}/>):(<EditUserForm submitForm={validateForm}/>))
            }
            {
                (localStorage.getItem('type') === 'biegacz'&&<a className={'user__button'} href={'/profile/stats'}><p className={'user--text user--button'}>Show Statistics
                    </p></a>)
            }
            {/* <a className={'user__button'} onClick={() => showForm(!form)}><p className={'user--text user--button'}>Edytuj dane</p></a> */}
            <a className={'user__button'}href={'/profile/edit'}>
            <p className={'user--text user--button'}>Edit Profile</p></a>
            <List url={'http://127.0.0.1:3102/profile/'} child={User}/>
        </section>
       
    );
}

export default Profile;
