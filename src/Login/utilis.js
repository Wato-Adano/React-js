const baseurl = process.env.REACT_APP_BASE_URL;
export const login = async({username,password}) =>{
    try{

        const rensponse = await fetch(`${baseurl}/auth/login` ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        })
        return rensponse.json();
    }
    catch(error){
        return `Error during login:${error.message}`
    }
}