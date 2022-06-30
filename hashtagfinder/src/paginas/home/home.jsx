import React, { useState } from 'react';
import Busca from '../../componentes/busca/busca';
import Cabecalho from '../../componentes/cabecalho/cabecalho';
import Descricao from '../../componentes/descricao/descricao';
import Galeria from '../../componentes/galeria/galeria';
import Rodape from '../../componentes/rodape/rodape';

import styles from './Home.module.css';
import '../../css/global.css';
import Twitter from '../../componentes/twitter/twitter';

const Home = () => {
  const [tweets, setTweets] = useState(null);

  return (
    <div className={styles.home}>
      <Cabecalho />
      <Descricao />
      <Busca />
      <Galeria />,
      <section>
        {tweets?.map(
          ({
            usuario,
            twitterUsuario,
            twitterTexto,
            twitterID,
            fotoPerfil,
          }) => {
            return (
              <Twitter
                fotoPerfil={fotoPerfil}
                usuario={usuario}
                twitterUsuario={twitterUsuario}
                twitterTexto={twitterTexto}
                twitterID={twitterID}
                key={twitterID}
              />
            );
          }
        )}
      </section>
      <Rodape />
    </div>
  );
};

export default Home;
