import React from 'react';

// Components
import List from "../components/List";
import Run from "../components/OrgRun";

// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+'/organizer/runs';

const Runs = () => {
    return(
        <section className={"runs"}>
              <a className={'user--text'}>Your runs: </a>
            <List url={url} child={Run}/>
        </section>
    );
}

export default Runs;