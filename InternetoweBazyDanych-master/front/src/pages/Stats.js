import React from 'react';

// Components
import List from '../components/List';
import Result from '../components/Result';

// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+'/profile/stats';

const Stats = () => {
    return(
      <section className={'stats'}>
          <a className={'user--text'}>Your's runs:</a>
          <List url={url} child={Result}/>
      </section>
    );
}

export default Stats;