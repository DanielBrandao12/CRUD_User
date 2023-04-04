import { useState, useEffect } from "react";
import "./home.css";
import Header from "../../components/Header";

import api from "../../services/api";


function Home() {

    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {

        async function getListUsers() {
            //pegar id do usuario logado e passar como parametro para retornar os endereços do usurio.
            const response = await api.get("/user")
            setListUsers(response.data)
        }

        getListUsers()

    }, []);


    return (
        <>
        <Header title={"Lista de usuários"}/>
            <main >
                <div>
                    <h1 className="title">Lista de Usuários</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listUsers.map((user) => (
                                    <tr key={user.Id}>
                                        <td>{user.Nome}</td>
                                        <td>{user.Email}</td>
                                    </tr>

                                ))
                            }
                        </tbody>

                    </table>
                </div>
            </main>
        
        </>
    );
}

export default Home;