import React from "react";
import "../../css/reset.css";
import "../../css/global.css";
import styles from "../login/login.module.css";
import Formulario from "../../componentes/formulario-login/formulario";
import BotaoHome from "../../componentes/botao-home/botaoHome";

export default function Login () {
  return (
    <>
      <header>
        <div className={styles.containerCabecalho}>
          <div className={styles.cabecalho}>
            <div className={styles.cabecalhoTitulo}>
              <span>hashtag</span>
              <span className={styles.tituloNegrito}>finder</span>
            </div>
            <BotaoHome />
          </div>
        </div>
      </header>
      <Formulario />
    </>
  );
};
