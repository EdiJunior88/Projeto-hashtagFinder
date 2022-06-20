import React from "react";
import styles from "../botao-home/botaoHome.module.css"
import HomeLogo from "../../imagens/icones/icon-home.svg";

export default function BotaoHome() {
  return (
    <>
      <div className={styles.botaoHome}>
        <button>
          <img className={styles.iconeHome} src={HomeLogo} alt="icone home" />
          Home
        </button>
      </div>
    </>
  );
}
