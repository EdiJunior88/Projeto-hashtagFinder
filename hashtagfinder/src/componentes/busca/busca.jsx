import React from 'react';
import './busca.css';
import IconeBusca from '../../imagens/icones/icon-search.svg';

export default function Busca() {
  return (
    <section className='container'>
      <div className='container-campo-busca'>
        <div className='campo-busca'>
          <img className='campo-busca-icone' src={IconeBusca} alt='Icone busca' />
          <input className='campo-busca-input' type='search' placeholder='Buscar...' />
        </div>
      </div>
    </section>
  );
}
