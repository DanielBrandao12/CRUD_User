import { useState } from "react";
import "./UserRegister.css"
import api from "../../services/api";


function UserRegister() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handleSubmit(event) {
        event.preventDefault()

        await api.post("/user", {

            nome: name,
            email,
            senha: password,

        }
        )

        setName('');
        setEmail('');
        setPassword('');
    }
    return (
        <>


            <main>
                <a href="">Voltar</a>
                <div class="container-registerUser">
                    <h1>Cadastre-se</h1>
                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Digite o nome completo"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Digite o email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Digite a senha"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button type="submit">Cadastrar</button>
                    </form>

                </div>

            </main>

        </>
    );
}

export default UserRegister;