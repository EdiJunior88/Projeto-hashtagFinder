import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import '../../css/global.css'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <Cabecalho />
      <Descricao />
      <Busca />
    </div>
  );
}

export default Home;
