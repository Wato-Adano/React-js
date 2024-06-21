const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUsers = async() =>{
    try{
        const rensponse = await fetch(`${baseUrl}/users`);
        return rensponse.json();

    }catch(error){
        throw new Error(error.message);
    }
};