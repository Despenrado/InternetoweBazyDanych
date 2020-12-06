import React from 'react';

// Components
import List from "../components/List";

// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+'/finished/';

const Homepage = () => {
    return(
        <section className={"homepage"}>
            <List url={url}/>
        </section>
    );
}

export default Homepage;