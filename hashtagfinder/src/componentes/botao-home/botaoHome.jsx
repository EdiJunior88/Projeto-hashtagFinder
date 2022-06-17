import React from "react";
import "../botao-home/botaoHome.css"
import HomeLogo from "../../imagens/icones/icon-home.svg";

export default function BotaoHome() {
  return (
    <>
      <div className="botao-home">
        <button>
          <img className="icone-home" src={HomeLogo} alt="icone home" />
          Home
        </button>
      </div>
    </>
  );
}
