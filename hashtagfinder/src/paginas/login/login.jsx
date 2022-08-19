import React from "react";
import styles2 from "./login.module.css";
import Formulario from "../../componentes/formulario-login/formulario";
import CabecalhoLogin from "../../componentes/cabecalho-login/cabecalhoLogin";

/* Título da página */
import useDocumentTitle from "@tanem/use-document-title";

export default function Login() {
  /* Título da Página */
  useDocumentTitle("hashtagfinder | Login");

  return (
    <div className={styles2.fundoLogin}>
      <CabecalhoLogin />
      <Formulario />
    </div>
  );
}
