import React from 'react';
import styles from './botaoRosa.module.css';
import iconeRosa from '../../imagens/icones/icon-home.svg';

export default function BotaoHome(props) {
  return (
    <div className={styles.botaoRosa}>
      <button>
        <img className={styles.iconeRosa} src={iconeRosa} alt='icone botao' />
        {props.pagina}
      </button>
    </div>
  );
}
