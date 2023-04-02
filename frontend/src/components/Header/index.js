import "./header.css";
import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <header>
      <h1 className="titulo" class="titulo">{title}</h1>
      <nav>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/Login"}>Login</Link></li>
          <li><Link to={"/UserRegister"}>Cadastre-se</Link></li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;