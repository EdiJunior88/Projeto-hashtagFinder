import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';
import { Link } from 'react-router-dom';

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
      
      {/* <ul>
        <li>
        <Link to="/sobre">Sobre</Link>

        </li>
        <li>
            <Link to="/login">Login</Link>
          </li>
      </ul> */}
    </div>
  );
}

export default Home;
