import React from 'react';
import '../../css/global.css';
import '../../css/home.css';
import Cabecalho from '../../componentes/cabecalho/cabecalho';

const Home = () => {
  return (
    <>
      {
        <Cabecalho />
      }

      {
        <div className='cabecalho-descricao'>
          <h1 className='descricao-titulo'>
            Encontre hashtags de maneira fácil
          </h1>
          <h2 className='descricao-subtitulo'>
            Digite o que deseja no campo de buscas e confira os resultados do
            Twitter abaixo
          </h2>
        </div>
      }
    </>
  );
};

export default Home;
