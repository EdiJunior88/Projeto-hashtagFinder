import React from "react";
import "../../css/reset.css"
import "../../componentes/formulario-login/formulario.css"

const Formulario = () => {
  return (
    <>
      <div className="container-formulario">
        <h1 className="formulario-titulo">Login</h1>
        <form action="" className="formulario">
          <div className="formulario-campo-usuario">
            <label>Usuário</label>
            <input type="text" />
          </div>

          <div className="formulario-campo-senha">
            <label>Senha</label>
            <input type="text" />
          </div>
          <div className="formulario-botao">
            <button className="formulario-botao-acessar">
                Acessar
            </button>
          </div>
        </form>
      </div>
      ;
    </>
  );
};

export default Formulario;
