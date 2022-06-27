import React from 'react';
import styles from './Twitter.module.css';

const Twitter = ({
  fotoPerfil,
  usuario,
  twitterUsuario,
  twitterTexto,
  twitterID,
}) => {
  return (
    <section className={`${styles.container} ${styles.TwitterFlex}`}>
      <div className={styles.containerTwitter}>
        <div className={styles.twitter}>
          <div className={styles.containerTwitterFoto}>
            <img
              className={styles.twitterFoto}
              src={fotoPerfil}
              alt='foto perfil'
            />
          </div>

          <div className={styles.containerTwitterDescricao}>
            <div className={styles.containerTwitterNomeUsuario}>
              <span className={styles.twitterNome}>{usuario}</span>
              <span className={styles.twitterUsuario}>
                <a
                  href={'https://twitter.com/${twitterUsuario}'}
                  target='_blank'>
                  @{twitterUsuario}
                </a>
              </span>
            </div>
            <p className={styles.twitterDescricao}>{twitterTexto}</p>
            <a
              className={styles.twitterLink}
              href={'https://twitter.com/${twitterUsuario}/status/${twitterID}'}
              target='_blank'>
              <span>Ver mais no Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Twitter;
