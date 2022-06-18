import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';
import '../../css/global.css'
import './home.css'

function Home() {
  return (
    <div className='home'>
      <Cabecalho />
      <Descricao />
      <Busca />
      <Galeria />
      <Rodape />
    </div>
  );
}

export default Home;
