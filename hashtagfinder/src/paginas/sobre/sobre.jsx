import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import { Link } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <header>
      <Cabecalho/>
        <div class="fundo">
          <h1>Sobre o Projeto</h1>
          <Link to="/">retornar a página inicial</Link>

        </div>
      </header>

      <main>
        <section>
          <article>
            <div class="sobre">
              <h2>O que é</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
              eaque modi fuga quisquam corporis eveniet necessitatibus enim
              dolorem laudantium, quibusdam esse asperiores voluptatum incidunt
              soluta, laborum expedita? Numquam, tenetur veritatis?
              </p>
            </div>

            <img src="" alt="" />
          </article>
        </section>
      </main>

      <section class="quemSomos">
        <h2>Quem Somos</h2>

        <div className="membros">
          <img src="" alt="foto" />
          <div class="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div class="containerIcones">
            <img src="" alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img src="" alt="foto" />
          <div class="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div class="containerIcones">
            <img src="" alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img src="" alt="foto" />
          <div class="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div class="containerIcones">
            <img src="" alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
          </div>
        </div>

        <div className="membros">
          <img src="" alt="foto" />
          <div class="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div class="containerIcones">
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
