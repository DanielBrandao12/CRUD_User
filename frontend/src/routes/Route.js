import { Navigate, Outlet } from "react-router-dom";
import api from "../services/api";

function PrivateRoutes() {
  const token = localStorage.getItem("token");
  api.defaults.headers.Authorization = `Bearer ${token}`;

  return token ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoutes;
