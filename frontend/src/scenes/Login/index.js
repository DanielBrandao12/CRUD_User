import "./login.css";


function Login() {


    return (
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
                <a href="">Cadastre-se</a>
            </div>

        </div>


        </main>
    );
}

export default Login;