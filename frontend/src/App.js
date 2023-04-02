
import './App.css';
import Login from "./scenes/Login";
import UserRegister from './scenes/UserRegister';
import Home from './scenes/Home'
import {RouterProvider, createBrowserRouter} from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login/>
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/UserRegister",
      element: <UserRegister/>
    }


]);


  return (
    
    <RouterProvider router={router}/>

  );
}

export default App;
