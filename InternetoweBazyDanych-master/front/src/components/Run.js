import React, {useState} from 'react';

// Components
import AddRunForm from '../components/AddRunForm';

// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+`/organizer/runs/`;

// Functions
import {updateUser} from "../components/Fetch";

const validateForm = async (e, changeState) => {
    let errors = [];
    const id = e.target.parentNode.parentNode.attributes.run_id.value;
    const form = document.forms['addRunForm'];
    if(form['name'].value.length < 8)
        errors.push({
            message: 'Run name field has to contain at least 8 characters!',
            success: false
        });
    if(!form['route'].value.length)
        errors.push({
            message: 'Route id field cannot be empty!',
            success: false
        });
    if(errors.length)
        changeState(errors);
    else {
        const data = {}
        data.name = form['name'].value;
        data.route = form['route'].value;
        data.date = form['date'].value;
        await updateUser(url+id, data, changeState);
        form['name'].value = '';
        form['route'].value = '';
    }
};

const signRunner = async (e, updateState) =>{
    e.preventDefault();
    const id = e.target.parentElement.parentElement.attributes.run_id.value;
    const res = await fetch(process.env.REACT_APP_UNSPLASH_URL+`/${id}/runner`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
    });
    const data = await res.text();
    updateState(data);
}



const Run = ({data}) => {
    const [text, updateText] = useState('');
    const [visibility, showForm] = useState(false);
    const date = data.DATA_BIEG.split('T');
    
    return (
      <div className={"run"} run_id={data.ID_BIEG}>
          {
              !visibility?(
              <div className={"run__left"}>
                  <p className={"run--text"}>{`Organizer: ${data.IMIE_UZYTKOWNIK} ${data.NAZWISKO_UZYTKOWNIK}`}</p>
                  <p className={"run--text"}>{`Date: ${date[0]}`}</p>
                  <p className={"run--text"}>{`City: ${data.MIASTO_TRASA}`}</p>
                  <p className={"run--text"}>{`Start: ${data.POCZATEK_TRASA}`}</p>
                  <p className={"run--text"}>{`End: ${data.KONIEC_TRASA}`}</p>
                  <p className={"run--text"}>{`Length: ${data.DLUGOSC_TRASA}km`}</p>
                  {
                      (localStorage.getItem('type') === "biegacz" && (
                          <button onClick={e => signRunner(e, updateText)}>{"Join to run!"}</button>))
                  }
                  
                  {
                      (localStorage.getItem('type') === "biegacz" && (<p className={"run--text"}>{text}</p>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === process.env.FRONT_IP+'/organizer/runs' && (
                          <a href={`/organizer/runners/${data.ID_BIEG}`}>Show runners</a>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === process.env.FRONT_IP+'/organizer/runs' && (

                              <button onClick={e => showForm(!visibility)}>Edit Run</button>)

          
                      )
                  }
              </div>
              ):<AddRunForm submitForm={validateForm}/>
          }
          <div className={"run__right"}>
              <p className={"run--text big"}>{data.NAZWA_BIEG}</p>
          </div>
      </div>
    );
        
}

export default Run;



