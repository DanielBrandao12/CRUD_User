import "./login.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import api from "../../services/api"

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();

        try{
            const {data} = await api.post("/user/login", {
                email,
                password
            })
            const { token } = data;
            localStorage.setItem("token", token)
            navigate("/AddressRegister")
        }catch(error){
            if (error.response?.data){
            
                alert(error.response.data.error)
            }else{

                alert("Não foi possivel autenticar")
            }
        }
    }


    return (
        <>
            <Header title={"Login"} />
            <main>
                <div className="container">
                    <h1>Login</h1>
                    <form className="form-login" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">Login</button>
                    </form>

                    <div>
                        <span>Não tem conta?</span>
                        <Link to={"/UserRegister"}>Cadastre-se</Link>
                    </div>

                </div>


            </main>
        </>
    );
}

export default Login;