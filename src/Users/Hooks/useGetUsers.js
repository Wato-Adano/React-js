 import { getUsers } from "../utilis";
 import{useState, useEffect} from "react";

 export const userGetUsers = () =>{
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState('');

    const [loading, setLoading]= useState(false);
    useEffect(() =>{
        const fetchUsers = async() =>{
            try{
                setLoading(true);
                const rensponse = await getUsers();
                setUsers(rensponse.users);
                setLoading(false);

            }
            catch(error){
                setLoading(false)
                setErrors(`Error: ${error.message}`)

            }
        }
        fetchUsers();
    },[])

    return {users, loading, errors}

 }