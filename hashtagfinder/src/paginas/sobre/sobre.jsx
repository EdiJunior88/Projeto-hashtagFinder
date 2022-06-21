import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <header>
      <Cabecalho/>
        <div className="fundo">
          <h1>Sobre o Projeto</h1>
          <Link to="/">retornar a página inicial</Link>

        </div>
      </header>

      <main>
        <section>
          <article>
            <div className="sobre">
              <h2>O que é</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              eaque modi fuga quisquam corporis eveniet necessitatibus enim
              dolorem laudantium, quibusdam esse asperiores voluptatum incidunt
              soluta, laborum expedita? Numquam, tenetur veritatis?
              </p>
            </div>

            <img alt="" />
          </article>
        </section>
      </main>

      <section className="quemSomos">
        <h2>Quem Somos</h2>

        <div className="membros">
          <img alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img src="" alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img src="" alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>
      </section>

      <footer>
        <span>Newtab Academy &copy; 2022</span>
      </footer>
    </>
  );
}

export default Sobre;
