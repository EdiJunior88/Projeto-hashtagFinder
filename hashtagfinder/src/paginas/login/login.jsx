import React from "react";
import "../../css/reset.css";
import "../../css/global.css";
import "../login/login.css";
import Formulario from "../../componentes/formulario-login/formulario";
import Cabecalho from "../../componentes/cabecalho/cabecalho"
import BotaoHome from "../../componentes/botao-home/botaoHome";

export default function Login () {
  return (
    <>
      <Cabecalho />
      <header>
        <div className="container-cabecalho-login">
          <div className="cabecalho">
            <div className="cabecalho-titulo">
              <span>hashtag</span>
              <span className="texto-negrito">finder</span>
            </div>
            <BotaoHome />
          </div>
        </div>
      </header>
      <Formulario />
    </>
  );
};
