import React, { useState, useEffect } from "react";
import Cabecalho from "../../componentes/cabecalho/cabecalho";

/* Título da página */
import useDocumentTitle from "@tanem/use-document-title";

/* Ícones dos Cartões dos Membros */
import Figura from "../../imagens/icones/about-illustration.svg";
import IconeGitHub from "../../imagens/icones/icon-github.svg";
import IconeEmail from "../../imagens/icones/icon-envelope.svg";
import IconeLikedIn from "../../imagens/icones/icon-linkedin.svg";

import Rodape from "../../componentes/rodape/rodape";
import styles from "../../paginas/sobre/Sobre.module.css";

const Sobre = () => {
  const [texto, setTexto] = useState("");
  const [equipe, setEquipe] = useState([]);
  const [ativaMenu, setAtivaMenu] = useState(false);

  /* Chave da API AirTable oculta */
  const API_KEY = process.env.REACT_APP_API_KEY;

  /* Título da Página */
  useDocumentTitle("hashtagfinder | Sobre");

  /* Utilizando a API AirTable */
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/appUf3f0O3QvA6QMd/Projeto?filterByFormula=" +
        encodeURI(`({Squad} = '04-22')`),
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setTexto(response.records[0].fields.Sobre);
      })
      .catch((erro) => console.log(erro));

    /* Fazendo fetch da API para pegar os dados do Squad */
    fetch(
      "https://api.airtable.com/v0/appUf3f0O3QvA6QMd/Equipe?filterByFormula=" +
        encodeURI(`({Squad} = '04-22')`),
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setEquipe(response.records);
      })
      .catch((erro) => console.log(erro));

      /* Ativa o cabeçalho após a posição vertical (y) 900 da página */
      function posicaoScroll() {
        if (window.scrollY >= 600) {
          setAtivaMenu(true);
        } else {
          setAtivaMenu(false);
        }
      }
      window.addEventListener('scroll', posicaoScroll);
  }, []);

  return (
    <div className={styles.sobre}>
      <Cabecalho acao={ativaMenu} />
      <header className={styles.fundo}>
        <div className={styles.titulo}>
          <h1 className={styles.tituloTexto}>Sobre o projeto</h1>
        </div>
      </header>
      <main>
        <section className={styles.artigo}>
          <div className={styles.subtitulo}>
            <h2 className={styles.subtituloTexto}>O que é</h2>

            <div className={styles.blocoParagrafo}>
              <p
                className={styles.blocoParagrafoTexto}
                dangerouslySetInnerHTML={{ __html: texto }}
              />
            </div>
          </div>

          <div className={styles.blocoImagem}>
            <img
              src={Figura}
              alt='Imagem duas pessoas em um quadro com projeto'></img>
          </div>
        </section>
      </main>
      <section className={styles.quemSomos}>
        <div className={styles.subtitulo2}>
          <h2 className={styles.subtitulo2Texto}>Quem somos</h2>
        </div>
      </section>

      {/* Geração dos cartões dos membros através do AirTable (API) */}
      <div className={styles.containerGeral}>
        {equipe.map((informacao, id) => (
          <div className={styles.container} key={id}>
            <div className={styles.containerMembros}>
              <div className={styles.containerCartaoMembros}>
                <img
                  className={styles.membroFoto}
                  src={informacao.fields.Imagem[0].url}
                  alt=' '
                />
                <div className={styles.informacaoMembros}>
                  <h3 className={styles.informacaoMembrosTitulo}>
                    {informacao.fields.Nome}
                  </h3>
                  <p className={styles.informacaoMembrosTexto}>
                    {informacao.fields.Descrição}
                  </p>
                </div>
                <div className={styles.containerIcones}>
                  <a
                    href={informacao.fields.Github}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeGitHub}
                      alt='icone'
                      className={styles.icones}
                      title='Github'
                    />
                  </a>
                  <a
                    href={`mailto:${informacao.fields.Email}`}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeEmail}
                      alt='icone'
                      className={styles.icones}
                      title='Email'
                    />
                  </a>
                  <a
                    href={informacao.fields.LinkedIn}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeLikedIn}
                      alt='icone'
                      className={styles.icones}
                      title='LinkedIn'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Rodape />
    </div>
  );
};

export default Sobre;
