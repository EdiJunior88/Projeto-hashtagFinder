import React from 'react';
import styles from './botaoAzul.module.css';
import iconeAzul from '../../imagens/icones/icon-user-alt.svg';

export default function BotaoLogin(props) {
  return (
    <div className={styles.botaoAzul}>
      <button>
        <img className={styles.iconeAzul} src={iconeAzul} alt='icone botao' />
        {props.pagina}
      </button>
    </div>
  );
}
