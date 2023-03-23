import {useState, useEffect} from "react";
import "./home.css";


import api from "../../services/api";


function Home() {

    const [listAddress, setListAddress] = useState([]);
    
    useEffect(()=>{

        async function getListAddress() {
            //pegar id do usuario logado e passar como parametro para retornar os endereços do usurio.
            const response = await api.get("/address/UserId/6")
           setListAddress(response.data)
        }

        getListAddress()

    }, []);


    return (
        <div>
            {
                listAddress.map((address)=>(
                    <p>{address.Rua}</p>
                ))
            }
            
        </div>
    );
}

export default Home;