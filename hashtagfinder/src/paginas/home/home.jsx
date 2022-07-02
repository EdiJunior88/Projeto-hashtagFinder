import React from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Rodape from '../../componentes/rodape/rodape';

import styles from './Home.module.css';
import '../../css/global.css';

const Home = () => {

  return (
    <div className={styles.home}>
      <Cabecalho />
      <Descricao />
      <Busca
        type='search'
        placeholder='Buscar...'
        maxLength={20}
      />
      <Rodape />
    </div>
  );
};

export default Home;
