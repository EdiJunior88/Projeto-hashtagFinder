import React from 'react';
import './cabecalho.css';
import IconeSobre from '../../imagens/icones/icon-info-circle.svg';
import IconeLogin from '../../imagens/icones/icon-user-alt.svg';

export default function Cabecalho() {
  return (
    <header className='container'>
      <div className='container-cabecalho'>
        <div className='cabecalho-titulo'>
          <span>hashtag</span>
          <span className='titulo-negrito'>finder</span>
        </div>

        <div className='container-botao'>
          <div className='cabecalho-botao'>
            <button className='botao-sobre'>
              <img className='icone-botao' src={IconeSobre} alt='icone sobre' />
              SOBRE
            </button>
            <button className='botao-login'>
              <img className='icone-botao' src={IconeLogin} alt='icone sobre' />
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
