import React from 'react';
import '../../css/reset.css';
import '../../css/global.css';

const Home = () => {
  return (
    <>
      <header>
        <div className='container-cabecalho'>
          <nav className='cabecalho'>
            <div className='cabecalho-titulo'>
              <span>hashtag</span>
              <span className='texto-negrito'>finder</span>
            </div>

            <div className='cabecalho-botoes'>
              <button typeof='button'>Sobre</button>
              <button typeof='button'>Login</button>
            </div>
          </nav>

          <div className='cabecalho-descricao'>
            <h1>Encontre hashtags de maneira fácil</h1>
            <h2>
              Digite o que deseja no campo de buscas e confira os resultados do
              Twitter abaixo
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
