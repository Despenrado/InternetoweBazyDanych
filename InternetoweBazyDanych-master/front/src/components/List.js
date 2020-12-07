import React, {useState, useEffect} from 'react';

// Functions
import {fetchData} from '../components/Fetch';

const List = ({url, child}) => {
  
    const [fetchedData, updateData] = useState([]);
    const Child = child;
 
    useEffect(() => {
        fetchData(updateData, url);
    }, []);
    console.log(fetchedData);
if(Array.isArray(fetchedData)){
    return (
        <ul className={"list"}>
            {
                fetchedData.map((data, index) => {
                    
                    return (
                       
                        <li key={index}>
                            <Child data={data}/>
                        </li>
                    );
                })
            }
        </ul>
      );
}else{
    return (
        <ul className={"list"}>
            {
                
                    
                        <li>
                            <Child data={fetchedData}/>
                        </li>
                    
                
            }
       </ul>
      );
}
 

   
}

export default List;