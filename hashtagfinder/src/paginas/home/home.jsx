import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';

import styles from './Home.module.css';
import '../../css/global.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Cabecalho />
      <Descricao />
      <Busca />
      <Galeria />
      <Rodape />
    </div>
  );
};

export default Home;
