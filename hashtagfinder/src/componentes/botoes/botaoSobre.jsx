import React from 'react';
import styles from './botaoRosa.module.css';
import iconeRosa from '../../imagens/icones/icon-info-circle.svg';

export default function BotaoSobre(props) {
  return (
    <div className={styles.botaoRosa}>
      <button>
        <img className={styles.iconeRosa} src={iconeRosa} alt='icone botao' />
        {props.pagina}
      </button>
    </div>
  );
}
