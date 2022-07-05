import React from 'react';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Figura from '../../imagens/icones/about-illustration.svg';
// import Perfil from '../../imagens/foto-perfil/foto.jpg';
import IconeGitHub from '../../imagens/icones/icon-github.svg';
import IconeEmail from '../../imagens/icones/icon-envelope.svg';
import IconeLikedIn from '../../imagens/icones/icon-linkedin.svg';
import Rodape from '../../componentes/rodape/rodape';
import styles from '../../paginas/sobre/Sobre.module.css';
import { useState, useEffect } from 'react';

const Sobre = () => {
  const [txt, setTxt] = useState('');
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=' +
        encodeURI(`({Squad} = '04-22')`),
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setTxt(response.records[0].fields.Sobre);
      })
      .catch((erro) => console.log(erro));

    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=' +
        encodeURI(`({Squad} = '04-22')`),
      {
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setEquipe(response.records);
      })
      .catch((erro) => console.log(erro));
  }, []);

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
              <p
                className={styles.blocoParagrafoTexto}
                dangerouslySetInnerHTML={{ __html: txt }}
              />
            </div>
          </div>

          <div className={styles.blocoImagem}>
            <img src={Figura} alt='illustration'></img>
          </div>
        </section>
      </main>

      <section className={styles.quemSomos}>
        <div className={styles.subtitulo2}>
          <h2 className={styles.subtitulo2Texto}>Quem Somos</h2>
        </div>
      </section>

      <div className={styles.containerGeral}>
        {equipe.map((info, id) => (
          <div className={styles.container} key={id}>
            <div className={styles.containerMembros}>
              <div className={styles.containerCartaoMembros}>
                <img
                  className={styles.membroFoto}
                  src={info.fields.Imagem[0].url}
                  alt=' '
                />
                <div className={styles.informacaoMembros}>
                  <h3 className={styles.informacaoMembrosTitulo}>
                    {info.fields.Nome}
                  </h3>
                  <p className={styles.informacaoMembrosTexto}>
                    {info.fields.Descrição}
                  </p>
                </div>
                <div className={styles.containerIcones}>
                  <a
                    href={info.fields.Github}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeGitHub}
                      alt='icone'
                      className={styles.icones}
                    />
                  </a>
                  <a
                    href={info.fields.Email}
                    target='_blank'
                    rel='noreferrer'>
                    <img src={IconeEmail} alt='icone' className={styles.icones} />
                  </a>
                  <a
                    href={info.fields.LinkedIn}
                    target='_blank'
                    rel='noreferrer'>
                    <img
                      src={IconeLikedIn}
                      alt='icone'
                      className={styles.icones}
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
