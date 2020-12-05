import React, {useState} from 'react';

// const removeUser = async (e, updateState) => {
//     e.preventDefault();
//     const login = e.target.parentElement.attributes.login.value;
//     const res = await fetch(`http://127.0.0.1:3102/admin/users/${login}`, {
//         method: "DELETE",
//         mode: "cors",
//         credentials: "include"
//     })
//     const data = await res.text();
//     updateState(data);
// }
Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '') +"."+ mm,
            (dd>9 ? '' : '') + "."+ dd
           ].join('');
  };
  
const User = ({data}) => {
    const [text, updateText] = useState('');
    let date = data.date;
    var dateStr = data.date;  
        
  
    var dateformat = new Date(dateStr);
   dateformat=dateformat.yyyymmdd();
    // console.log(dateformat.getUTCFullYear());
    // console.log(dateformat.getMonth());
    // console.log(dateformat.getDate());
 
    return(
      <div className={'user'} login={data.login}>
          <p className={'user--text'}>{`Name: ${data.name}`}</p>
          <p className={'user--text'}>{`Surname: ${data.surname}`}</p>
          <p className={'user--text'}>{`Birth date: ${dateformat}`}</p>
          <p className={'user--text'}>{`Type: ${data.type}`}</p>
          {/* {
            //   (window.location.href === `http://127.0.0.1:3000/organizer/Finishrun` &&(<button >Remove</button>))
          } */}
          <p className={'user--text'}>{text}</p>
      </div>
    );
}

export default User;