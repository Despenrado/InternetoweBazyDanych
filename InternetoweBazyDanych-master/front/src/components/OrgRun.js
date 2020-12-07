import React, {useEffect, useState} from 'react';

// Components
import AddRunForm from '../components/AddRunForm';

// Variables
const url = process.env.REACT_APP_UNSPLASH_URL+`/organizer/runs/`;

// Functions
import {updateUser,submitForm,fetchData,deleteData} from "../components/Fetch";

 async function closeRun  (e,Fromdata) {
    //const [fetchedData, updateData] = useState([]);
const data = {};
const date = Fromdata.DATA_BIEG.split('T');
data.nazwa = Fromdata.NAZWA_BIEG;
data.trasa_id = Fromdata.ID_TRASA;
data.time = "23:52:00";
data.data_bieg = date[0];
  await submitForm(process.env.REACT_APP_UNSPLASH_URL+`/organizer/${Fromdata.ID_BIEG}/finish`, data);

//Skasowanie biegu
//await deleteData(process.env.REACT_APP_UNSPLASH_URL+`/organizer/${Fromdata.ID_BIEG}/delete`);
    
   
}
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
       // changeState(errors);
       changeState(errors);
    else {
        const data = {}
        data.name = form['name'].value;
        data.route = form['route'].value;
        data.date = form['date'].value;
        await updateUser(process.env.REACT_APP_UNSPLASH_URL+`/organizer/${id}/edit`, data);
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
                  <p className={"run--text"}>{`ID Bieg: ${data.ID_BIEG} `}</p>
                  <p className={"run--text"}>{`Data: ${date[0]}`}</p>
                  <p className={"run--text"}>{`Route ID: ${data.ID_TRASA}`}</p>
                  <p className={"run--text"}>{`Name of run: ${data.NAZWA_BIEG}`}</p>
                
                  {
                      (localStorage.getItem('type') === "biegacz" && (
                          <button onClick={e => signRunner(e, updateText)}>{"Join to run!"}</button>))
                  }
                  {/* {
                      (localStorage.getItem('type') === "biegacz" && (
                          <button onClick={e => signVolunteer(e, updateText)}>{"Wolontariusz"}</button>))
                  } */}
                  {
                      (localStorage.getItem('type') === "biegacz" && (<p className={"run--text"}>{text}</p>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === 'http://127.0.0.1:3000/organizer/runs' && (
                          <a href={`/organizer/runners/${data.ID_BIEG}`}>Show runners</a>))
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === 'http://127.0.0.1:3000/organizer/runs' && (
                              <button onClick={e => showForm(!visibility)}>Edit Run</button>)
                      )
                  }
                  {
                      (localStorage.getItem('type') === "organizator" && window.location.href === 'http://127.0.0.1:3000/organizer/runs' && (
                         <a href={`/organizer/Finishrun/${data.ID_BIEG}`} onClick={e=>closeRun(e,data)}>Close run</a>))

                    
                        
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