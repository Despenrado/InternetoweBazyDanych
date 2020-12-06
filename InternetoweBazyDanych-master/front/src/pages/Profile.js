import React, {useState} from 'react';

// Components
import List from "../components/List";
import User from "../components/User";



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
            
       
            <List url={process.env.REACT_APP_UNSPLASH_URL+'/profile/'} child={User}/>
        </section>
       
    );
}

export default Profile;