import React from "react";
import "../../css/reset.css";
import "../../css/global.css";
import "../login/login.css";
import HomeLogo from "../../imagens/icones/icon-home.svg";

const Login = () => {
  return (
    <>
      <header>
        <div className="container-cabecalho-login">
          <nav className="cabecalho">
            <div className="cabecalho-titulo">
              <span>hashtag</span>
              <span className="texto-negrito">finder</span>
            </div>

            <div className="cabecalho-botao">
              <img src={HomeLogo} alt="icone da home" />
              <p>Home</p>
            </div>
          </nav>
        </div>
      </header>

      <div className="container-formulario">
        <h1 className="formulario-titulo">Login</h1>
        <form action="" className="formulario">
          <div className="formulario-campo-usuario">
            <label htmlFor="">Usuário</label>
            <input type="text" />
          </div>

          <div className="formulario-campo-senha">
            <label htmlFor="">Senha</label>
            <input type="text" />
          </div>
          <div className="formulario-botao">
            <button className="formulario-botao-acessar">Acessar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
