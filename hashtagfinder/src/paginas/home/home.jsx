import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';
import { Link } from 'react-router-dom';

import styles from './Home.module.css';
import BotaoSobre from '../../componentes/botoes/botaoSobre';
import BotaoLogin from '../../componentes/botoes/botaoLogin';

function Home() {
  return (
    <div className={styles.home}>
      <Cabecalho />
      <Descricao />
      <Busca />
      <Galeria />
      <Rodape />
    </div>
  );
}

export default Home;
