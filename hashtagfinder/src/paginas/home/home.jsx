import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import '../../css/global.css'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <Cabecalho />
      <Descricao />
    </div>
  );
}

export default Home;
