import React from 'react';
import Reset from '../../css/reset.css';
import Cabecalho_Imagem from '../../imagens/cabecalho/cabecalho.jpg';

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

          <div className='cabecalho-imagem'>
            <img src={Cabecalho_Imagem} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
