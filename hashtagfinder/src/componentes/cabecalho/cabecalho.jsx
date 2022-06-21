import React from 'react';
import styles from './Cabecalho.module.css';
import BotaoSobre from '../botoes/botaoSobre';
import BotaoLogin from '../botoes/botaoLogin';

export default function Cabecalho() {
  return (
    <header className={styles.container}>
      <div className={styles.containerCabecalho}>
        <div className={styles.cabecalhoTitulo}>
          <span>hashtag</span>
          <span className={styles.tituloNegrito}>finder</span>
        </div>
       <BotaoSobre pagina={'Sobre'} />
       <BotaoLogin pagina={'Login'} />
      </div>
    </header>
  );
}
