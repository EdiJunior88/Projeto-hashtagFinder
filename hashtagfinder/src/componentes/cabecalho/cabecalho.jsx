import React from 'react';
import '../../css/cabecalho.css';
import sobreIcone from '../../imagens/icones/icon-info-circle.svg';
import loginIcone from '../../imagens/icones/icon-user-alt.svg';

export default function Cabecalho() {
  return (
    <>
      <header>
        <div className="container-cabecalho">
          <nav className="cabecalho">
            <div className="cabecalho-titulo">
              <span>hashtag</span>
              <span className="texto-negrito">finder</span>
            </div>

            <div className="cabecalho-botoes">
              <button className="botao-sobre">
                <img className="botao-icone" src={sobreIcone} />
                Sobre
              </button>

              <button className="botao-login">
                <img className="botao-icone" src={loginIcone} />
                Login
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
