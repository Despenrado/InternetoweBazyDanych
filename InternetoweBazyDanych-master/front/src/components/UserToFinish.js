import React, {useState} from 'react';
import { submitForm } from './Fetch';


Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '') +"."+ mm,
            (dd>9 ? '' : '') + "."+ dd
           ].join('');
  };
  function sendScore(e,time,number,data){
      const body ={};
      body.login=data.LOGIN_UZYTKOWNIK;
      body.place=number;
      body.time=time;
     submitForm(process.env.REACT_APP_UNSPLASH_URL+`/organizer/result/${localStorage.getItem('id')}`,body);
  }
const UserToFinish = ({data}) => {
    const [text, updateText] = useState('');
    let date = data.date;
    var dateStr = data.date;  
    
    console.log('gsdfgs')
  
    var dateformat = new Date(dateStr);
   dateformat=dateformat.yyyymmdd();
    
    return(
      <div className={'user'} login={data.login}>
          <p className={'user--text'}>{`Name: ${data.IMIE_UZYTKOWNIK}`}</p>
          <p className={'user--text'}>{`Surname: ${data.NAZWISKO_UZYTKOWNIK}`}</p>
          <p className={'user--text'}>{`Login: ${data.LOGIN_UZYTKOWNIK}`}</p>
         {/* <input className={"form_input"} type={"time"}> Time: </input> */}
        <p className={"user--text"}>Time: </p>
        <input type={"time"} name={"time"} id={"time"} ></input>
        <p className={"user--text"}>Place: </p>
        <input type={"number"} name={"place"} id={"place"} ></input>
          <button className={"form_button"} onClick={e=>sendScore(e,document.getElementById('time').value,document.getElementById('place').value,data)}>Send score</button>
          
          <p className={'user--text'}>{text}</p>
      </div>
    );
}

export default UserToFinish;