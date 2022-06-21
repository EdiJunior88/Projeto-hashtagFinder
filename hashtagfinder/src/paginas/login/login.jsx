import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/reset.css';
import '../../css/global.css';
import styles from '../login/login.module.css';
import Formulario from '../../componentes/formulario-login/formulario';
import BotaoHome from '../../componentes/botoes/botaoHome';

export default function Login() {
  return (
    <div className={styles.fundoLogin}>
      <header>
        <div className={styles.containerCabecalho}>
          <div className={styles.cabecalho}>
            <div className={styles.cabecalhoTitulo}>
              <span>hashtag</span>
              <span className={styles.tituloNegrito}>finder</span>
              <Link
                to='/'
                text='link para home'
                className='linkHome'
                style={{ textDecoration: 'none' }}>
                <BotaoHome />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Formulario />
    </div>
  );
}
