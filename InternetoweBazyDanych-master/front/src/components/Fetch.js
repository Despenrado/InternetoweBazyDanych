const fetchData = async (updateData, url) => {
   
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "include"
    });
    let data = await res.json();
    updateData(data);
   console.log('fgdfgh')
}

const updateUser = async (url, body, updateData) => {
    const data = [];
    try {
        const res = await fetch(url, {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        data.push(await res.json());
    }catch(err){
        console.error(err);
        data.push({
            message: "Wystąpił błąd!",
            success: false
        });
    }
    updateData(data);
    return data[0];
}

const submitForm = async (url, body, updateData) => {
    const data = [];
    try {
        const res = await fetch(url, {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
        data.push(await res.json());
    }catch(err){
        console.error(err);
        console.log(err.message);
    
        if(err.message!="Unexpected token T in JSON at position 0" && err.message!="Unexpected token B in JSON at position 0" ) {
            data.push({
                //  message: "Wystąpił błąd!",
                message: "Wystąpił błąd!",
                  success: false
              });
        }
        
    }
    updateData(data);
    return data[0];
}

const deleteData = async(url) => {
    const res = await fetch(url, {
        method: "DELETE",
        mode: "cors",
        credentials: "include"
    });
    let data = await res.json();

}



export{
    fetchData,
    submitForm,
    updateUser,
    deleteData,
}