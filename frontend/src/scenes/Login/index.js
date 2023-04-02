import "./login.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
function Login() {


    return (

        <>
            <Header title={"Login"} />
            <main>
                <div class="container">
                    <h1>Login</h1>
                    <form class="form-login">
                        <input
                            type="email"
                            placeholder="Digite seu email"

                        />
                        <input
                            type="password"
                            placeholder="Digite sua senha"

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