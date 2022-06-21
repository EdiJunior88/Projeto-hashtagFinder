import React from 'react';
import styles from '../../componentes/cabecalho/Cabecalho.module.css';
import styles2 from './login.module.css';
import Formulario from '../../componentes/formulario-login/formulario';
import BotaoHome from '../../componentes/botoes/botaoHome';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className={styles2.fundoLogin}>
      <header className={styles.container}>
        <div className={styles.containerCabecalho}>
          <div className={styles.cabecalhoTitulo}>
            <span>hashtag</span>
            <span className={styles.tituloNegrito}>finder</span>
          </div>

          <div className={styles.containerCabecalhoBotoes}>
            <BotaoHome pagina={'Home'} />
          </div>
        </div>
      </header>

      <Formulario />
    </div>
  );
}
