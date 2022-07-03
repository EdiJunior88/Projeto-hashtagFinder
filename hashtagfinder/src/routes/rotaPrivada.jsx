import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Autenticacao } from "../api/autenticacao";

const PrivateRoute = () => {
  const EstaAutenticado = Autenticacao();
  return EstaAutenticado ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute;
