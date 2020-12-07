import React, {useState} from 'react';


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