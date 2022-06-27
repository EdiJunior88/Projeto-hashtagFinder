<<<<<<< HEAD
import React from "react";
import styles from "../../componentes/cabecalho/Cabecalho.module.css";
import styles2 from "./login.module.css";
import Formulario from "../../componentes/formulario-login/formulario";
import BotaoHome from "../../componentes/botoes/botaoHome";
// import { Link } from 'react-router-dom';
=======
import React from 'react';
import styles from '../../componentes/cabecalho/Cabecalho.module.css';
import styles2 from './login.module.css';
import Formulario from '../../componentes/formulario-login/formulario';
import BotaoHome from '../../componentes/botoes/botaoHome';
import { Link } from 'react-router-dom';
>>>>>>> 025b4a860de1db342dbb553b1ff981086786b615

export default function Login() {
  return (
    <div className={styles2.fundoLogin}>
      <header className={styles.container}>
        <div className={styles.containerCabecalho}>
          <div className={styles.cabecalhoTitulo}>
            <Link
              to='/'
              text='Link para Home'
              className='linkHome'
              style={{ textDecoration: 'none' }}>
              <span>hashtag</span>
              <span className={styles.tituloNegrito}>finder</span>
            </Link>
          </div>

          <div className={styles.containerCabecalhoBotoes}>
            <BotaoHome pagina={"Home"} />
          </div>
        </div>
      </header>

      <Formulario />
    </div>
  );
}
