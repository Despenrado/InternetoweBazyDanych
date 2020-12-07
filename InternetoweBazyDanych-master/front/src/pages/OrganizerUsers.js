import React from 'react';

// Components
import List from "../components/List";
import Runner from "../components/Runner";

// Variables
const href = window.location.href.split('/');
// const url = `http://127.0.0.1:3102/organizer/runs/`;
const url = process.env.REACT_APP_UNSPLASH_URL+`/organizer/${href[href.length-1]}/runners/`;

const OrganizerUsers = () => {
 
    return(
        <section className={"runs"}>
              {/* <a className={'user--text'}>Runners:</a> */}
            <List url={url} child={Runner}/>
        </section>
    );
}

export default OrganizerUsers;