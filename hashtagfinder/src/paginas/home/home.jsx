import React, { useEffect, useState } from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';

import styles from './Home.module.css';
import '../../css/global.css';

import Loader from '../../componentes/loader/Loader';
import Twitter from '../../componentes/twitter/twitter';

const Home = () => {
  const [tweets, setTweets] = useState(null);
  const [searchResponse, setSearchResponse] = useState(''); //search answer
  const [searchValue, setSearchValue] = useState(''); //field value
  const [titleTag, setTitleTag] = useState();
  const [resultsNumber, setResultsNumber] = useState(0);
  const [moreRequest, setMoreRequest] = useState(10);

  const handleValue = (e) => {
    if (e.keyCode === 13) {
      setSearchValue(
        e.target.value.replace(/[^a-zA-Z0-9_]/g, '').replace(' ', '')
      );

      setSearchResponse(<Loader />);
      setResultsNumber(10);
      setMoreRequest(10);

      if (e.target.value === '') {
        setSearchResponse('É necessário digitar algo no campo de buscas...');
        setSearchValue('');
      }
    }

    if (e.keyCode === 8) {
      setSearchResponse('');
      setSearchValue('');
      setTitleTag('');
      setResultsNumber(0);
    }

    if (e.target.value.length >= 20) {
      setSearchResponse('Limite de caracteres atingido 🚨.');
    }
  };

  return (
    <div className={styles.home}>
      <Cabecalho />
      <Descricao />
      <Busca
        type='search'
        id='input'
        onKeyDown={handleValue}
        placeholder='Buscar...'
        maxLength={20}
      />
      <Rodape />
    </div>
  );
};

export default Home;
