import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import { Link } from 'react-router-dom';
import '../../paginas/sobre/sobre.css';
import Figura from '../../imagens/icones/about-illustration.svg';
import Perfil from '../../imagens/foto-perfil/foto.jpg';
import IconeGitHub from '../../imagens/icones/icon-github.svg';
import IconeEmail from '../../imagens/icones/icon-envelope.svg';
import IconeLikedIn from '../../imagens/icones/icon-linkedin.svg';

const Sobre = () => {
  return (
    <div className="Sobre">
      <header>
<<<<<<< HEAD
        <Cabecalho />
        <div className="titulo">
          <h1>Sobre o projeto</h1>
=======
      <Cabecalho/>
        <div className="fundo">
          <h1>Sobre o Projeto</h1>
          <Link to="/">retornar a página inicial</Link>

>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc
        </div>

        {/* <div class="fundo"> */}
        {/* <Link to="/">retornar a página inicial</Link> */}
        {/* </div> */}
      </header>

      <main>
<<<<<<< HEAD
        <section class="artigo">
          <div class="subtitulo">
            <h2>O que é</h2>
          </div>

          <div class="bloco-paragrafo">
            <p>
              Ao contrário da crença popular, o Lorem Ipsum não é simplesmente
              texto aleatório. Tem raízes numa peça de literatura clássica em
              Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard
              McClintock, um professor de Latim no Colégio Hampden-Sydney, na
              Virgínia, procurou uma das palavras em Latim mais obscuras
              (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades
              do mundo na literatura clássica, descobriu a sua origem.
            </p>
          </div>
          <div class="bloco-imagem">
            <img src={Figura} alt="illustration"></img>
          </div>
        </section>
      </main>

      <section class="quemSomos">
        <div class="subtitulo2">
          <h2>Quem Somos</h2>
        </div>

        <div className="membros">
          <img src={Perfil} alt="foto" />
          <div class="informacaoMembros">
            <h3>Edivaldo Reis</h3>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div class="containerIcones">
            <img src={IconeGitHub} alt="icone" className="icones">
=======
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
>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc
              {/* <a href="http://" target="_blank"></a> */}
            </img>
            <img src={IconeEmail} alt="icone" className="icones"></img>
            <img src={IconeLikedIn} alt="icone" className="icones"></img>
          </div>
        </div>

        <div className="membros">
<<<<<<< HEAD
          <img src={Perfil} alt="foto" />
          <div class="informacaoMembros">
            <h3>Sarah Rúbia</h3>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div class="containerIcones">
            <img src={IconeGitHub} alt="icone" className="icones"></img>
            <img src={IconeEmail} alt="icone" className="icones"></img>
            <img src={IconeLikedIn} alt="icone" className="icones"></img>
=======
          <img alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc
          </div>
        </div>

        <div className="membros">
<<<<<<< HEAD
          <img src={Perfil} alt="foto" />
          <div class="informacaoMembros">
            <h3>Anderson Nascimento</h3>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div class="containerIcones">
            <img src={IconeGitHub} alt="icone" className="icones"></img>
            <img src={IconeEmail} alt="icone" className="icones"></img>
            <img src={IconeLikedIn} alt="icone" className="icones"></img>
=======
          <img alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc
          </div>
        </div>

        <div className="membros">
<<<<<<< HEAD
          <img src={Perfil} alt="foto" />
          <div class="informacaoMembros">
            <h3>Washington Santos</h3>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div class="containerIcones">
            <img src={IconeGitHub} alt="icone" className="icones"></img>
            <img src={IconeEmail} alt="icone" className="icones"></img>
            <img src={IconeLikedIn} alt="icone" className="icones"></img>
=======
          <img src="" alt="foto" />
          <div className="informacaoMembros">
            <h3>Nome Aqui</h3>
            <p>Informação Sobre os membros</p>
          </div>
          <div className="containerIcones">
            <img src="" alt="icone" className="icones">
              {/* <a href="http://" target="_blank"></a> */}
            </img>
>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc
          </div>
        </div>
      </section>

      <footer>
        <span>Newtab Academy &copy; 2022</span>
      </footer>
    </div>
  );
};

export default Sobre;
