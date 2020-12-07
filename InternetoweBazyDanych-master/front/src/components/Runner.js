import React, {useState} from 'react';

Date.prototype.yyyymmdd = function() {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();
  
    return [this.getFullYear(),
            (mm>9 ? '' : '') +"."+ mm,
            (dd>9 ? '' : '') + "."+ dd
           ].join('');
  };
  
const Runner = ({data}) => {
    const [text, updateText] = useState('');
    let date = data.date;
    var dateStr = data.date;  
        
  
    var dateformat = new Date(dateStr);
   dateformat=dateformat.yyyymmdd();
    
    
    return(
      <div className={'user'} login={data.LOGIN_UZYTKOWNIK}>
         <p className={'user--text'}>{`Login: ${data.LOGIN_UZYTKOWNIK}`}</p>
          <p className={'user--text'}>{`Name: ${data.IMIE_UZYTKOWNIK}`}</p>
          <p className={'user--text'}>{`Surname: ${data.NAZWISKO_UZYTKOWNIK}`}</p>
          
          
          {/* {
              (window.location.href === 'http://127.0.0.1:3000/admin/users'&&(<button onClick={(e) => removeUser(e, updateText)}>Remove</button>))
          } */}
          <p className={'user--text'}>{text}</p>
      </div>
    );
}

export default Runner;