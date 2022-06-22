import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import styles from '../../paginas/sobre/Sobre.module.css';
import Figura from '../../imagens/icones/about-illustration.svg';
import Perfil from '../../imagens/foto-perfil/foto.jpg';
import IconeGitHub from '../../imagens/icones/icon-github.svg';
import IconeEmail from '../../imagens/icones/icon-envelope.svg';
import IconeLikedIn from '../../imagens/icones/icon-linkedin.svg';
import Rodape from '../../componentes/rodape/rodape';

const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <header className={styles.fundo}>
        <Cabecalho />
        <div className={styles.titulo}>
          <h1 className={styles.tituloTexto}>Sobre o projeto</h1>
        </div>
      </header>

      <main>
        <section className={styles.artigo}>
          <div className={styles.subtitulo}>
            <h2 className={styles.subtituloTexto}>O que é</h2>

            <div className={styles.blocoParagrafo}>
              <p className={styles.blocoParagrafoTexto}>
                Ao contrário da crença popular, o Lorem Ipsum não é simplesmente
                texto aleatório. Tem raízes numa peça de literatura clássica em
                Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard
                McClintock, um professor de Latim no Colégio Hampden-Sydney, na
                Virgínia, procurou uma das palavras em Latim mais obscuras
                (consectetur) numa passagem Lorem Ipsum, e atravessando as
                cidades do mundo na literatura clássica, descobriu a sua origem.
              </p>
            </div>
          </div>
          
          <div className={styles.blocoImagem}>
            <img src={Figura} alt='illustration'></img>
          </div>
        </section>
      </main>

      <section className={styles.quemSomos}>
        <div className={styles.subtitulo2}>
          <h2>Quem Somos</h2>
        </div>

        <div className={styles.membros}>
          <img src={Perfil} alt='foto' />
          <div className={styles.informacaoMembros}>
            <h3>Edivaldo Reis</h3>
            <p className={styles.informacaoMembrosTexto}>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div className={styles.containerIcones}>
            <img src={IconeGitHub} alt='icone' className={styles.icones}></img>
            <img src={IconeEmail} alt='icone' className={styles.icones}></img>
            <img src={IconeLikedIn} alt='icone' className={styles.icones}></img>
          </div>
        </div>

        <div className={styles.membros}>
          <img src={Perfil} alt='foto' />
          <div className={styles.informacaoMembros}>
            <h3>Sarah Rúbia</h3>
            <p className={styles.informacaoMembrosTexto}>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div className={styles.containerIcones}>
            <img src={IconeGitHub} alt='icone' className={styles.icones}></img>
            <img src={IconeEmail} alt='icone' className={styles.icones}></img>
            <img src={IconeLikedIn} alt='icone' className={styles.icones}></img>
          </div>
        </div>

        <div className={styles.membros}>
          <img src={Perfil} alt='foto' />
          <div className={styles.informacaoMembros}>
            <h3>Anderson Nascimento</h3>
            <p className={styles.informacaoMembrosTexto}>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div className={styles.containerIcones}>
            <img src={IconeGitHub} alt='icone' className={styles.icones}></img>
            <img src={IconeEmail} alt='icone' className={styles.icones}></img>
            <img src={IconeLikedIn} alt='icone' className={styles.icones}></img>
          </div>
        </div>

        <div className={styles.membros}>
          <img src={Perfil} alt='foto' />
          <div className={styles.informacaoMembros}>
            <h3>Washington Santos</h3>
            <p className={styles.informacaoMembrosTexto}>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de
              impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por
              estas indústrias desde o ano de 1500, quando uma misturou os
              caracteres de um texto para criar um espécime de livro.
            </p>
          </div>
          <div className={styles.containerIcones}>
            <img src={IconeGitHub} alt='icone' className={styles.icones}></img>
            <img src={IconeEmail} alt='icone' className={styles.icones}></img>
            <img src={IconeLikedIn} alt='icone' className={styles.icones}></img>
          </div>
        </div>
      </section>

      <Rodape />
    </div>
  );
};

export default Sobre;
