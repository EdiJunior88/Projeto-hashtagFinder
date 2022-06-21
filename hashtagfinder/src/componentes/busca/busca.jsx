import React from 'react';
import styles from './Busca.module.css';
import IconeBusca from '../../imagens/icones/icon-search.svg';

export default function Busca() {
  return (
    <section className={styles.container}>
      <div className={styles.containerCampoBusca}>
        <div className={styles.campoBusca}>
          <img className={styles.campoBuscaIcone} src={IconeBusca} alt='icone busca' />
          <input className={styles.campoBuscaInput} type='search' placeholder='Buscar...' />
        </div>
      </div>
    </section>
  );
}
