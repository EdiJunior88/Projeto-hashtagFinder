<<<<<<< HEAD
import React from 'react';
import '../../css/reset.css';
import '../../css/global.css';
import styles from '../login/login.module.css';
import Formulario from '../../componentes/formulario-login/formulario';
import BotaoHome from '../../componentes/botao-home/botaoHome';
=======
import React from "react";
import { Link } from "react-router-dom";
import "../../css/reset.css";
import "../../css/global.css";
import styles from "../login/login.module.css";
import Formulario from "../../componentes/formulario-login/formulario";
import BotaoHome from "../../componentes/botao-home/botaoHome";
>>>>>>> 1b0fb4edd5251dee700fa1a0d087bc5a0e700382

export default function Login() {
  return (
<<<<<<< HEAD
    <div className={styles.fundoLogin}>
      <header>
        <div className={styles.containerCabecalho}>
          <div className={styles.cabecalho}>
            <div className={styles.cabecalhoTitulo}>
              <span>hashtag</span>
              <span className={styles.tituloNegrito}>finder</span>
=======
    <>
        <header>
          <div className={styles.containerCabecalho}>
            <div className={styles.cabecalho}>
              <div className={styles.cabecalhoTitulo}>
                <span>hashtag</span>
                <span className={styles.tituloNegrito}>finder</span>
              </div>
              <Link to="/" text="link para home" className="linkHome" style={{ textDecoration:'none' }}>
                <BotaoHome />
              </Link>
>>>>>>> 1b0fb4edd5251dee700fa1a0d087bc5a0e700382
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </header>
      <Formulario />
    </div>
=======
        </header>
        <Formulario />
    </>
>>>>>>> 1b0fb4edd5251dee700fa1a0d087bc5a0e700382
  );
}
