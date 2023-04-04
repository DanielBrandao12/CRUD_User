
import './App.css';
import Login from "./scenes/Login";
import UserRegister from './scenes/UserRegister';
import AddressRegister from './scenes/AddressRegister';
import Home from './scenes/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from './routes/Route';

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/Login" exact={true} element={<Login />} />
        <Route path="/userRegister" exact={true} element={<UserRegister />} />

        <Route element={<PrivateRoutes/>}>
          <Route path="/addressRegister" exact={true} element={<AddressRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
