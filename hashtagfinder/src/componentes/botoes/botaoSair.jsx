import React from 'react';
import styles from './botaoAzul.module.css';
import iconeAzul from '../../imagens/icones/icon-power-off.svg';
import { Link } from 'react-router-dom';

export default function BotaoSair(props) {
  return (
    <div className={styles.botaoAzul}>
      <Link
        to='/login'
        text='Link para Login'
        className='linkLogin'
        style={{ textDecoration: 'none' }}>
        <button>
          <img className={styles.iconeAzul} src={iconeAzul} alt='icone botao' />
          {props.pagina}
        </button>
      </Link>
    </div>
  );
}
