import React from 'react';

// Components
import List from "../components/List";
import Runner from "../components/Runner";
import UserToFinish from "../components/UserToFinish";
import SubmitForm from "../components/Fetch";
// Variables
const href = window.location.href.split('/');
// const url = `http://127.0.0.1:3102/organizer/runs/`;
const url = process.env.REACT_APP_UNSPLASH_URL+`/organizer/${href[href.length-1]}/runners/`;
const FinishRun = () => {
console.log('koncze');
  const id=href[href.length-1]
    localStorage.setItem('id',id);
    
    return(
        <section className={"runs"}>
            <List url={process.env.REACT_APP_UNSPLASH_URL+`/organizer/${id}/runners`} child={UserToFinish}/>
        </section>
    );
}

export default FinishRun;