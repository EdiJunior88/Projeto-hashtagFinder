import Container from '../../componentes/container/Container';
import styles from './Lista.module.css';
import styles2 from '../../componentes/cabecalho/Cabecalho.module.css';
import BotaoHome from '../../componentes/botoes/botaoHome';
import BotaoSair from '../../componentes/botoes/botaoSair';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Lista() {
  const [lista, setLista] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  /* API AIRTABLE para pegar os dados digitados no componente BUSCA */
  useEffect(() => {
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=' +
        encodeURI("({Squad}='04-22')") +
        `&pageSize=${currentPage}&&sort` +
        encodeURI('[0][field]=Data') +
        '&sort' +
        encodeURI('[0][direction]=desc'),

      {
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setLista(result.records))
      .catch((error) => console.log('error', error));
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entradas) => {
      // se o elemento que estiver observando estiver visivel irá executar o código para trazer a próxima página de conteúdo
      if (entradas.some((entrada) => entrada.isIntersecting)) {
        console.log('elemento está visível', entradas);
        setTimeout(
          () =>
            setCurrentPage(
              (currentPageInsideState) => currentPageInsideState + 10
            ),
          1000
        );
      }
    });

    //esse metodo observa algum elemento da página
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  // Estou usando a api Intl para formatar data e hora regional com pouco código
  // Link com exemplos de uso https://devhints.io/wip/intl-datetime
  function formataData(data) {
    let novaData = new Intl.DateTimeFormat('pt-br', {
      day: '2-digit',
      month: '2-digit',
    }).format(data);
    return novaData;
  }

  function formataHora(hora) {
    let novaHora = new Intl.DateTimeFormat('pt-br', {
      hour: 'numeric',
      minute: 'numeric',
    }).format(hora);
    return novaHora;
  }

  /* Função dar scroll no topo da página através de um botão lateral  */
  const botaoTopoPagina = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className={styles.fundo}>
      <header className={styles2.container}>
        <div className={styles2.containerCabecalho}>
          <div className={styles2.cabecalhoTitulo}>
            <Link
              to='/'
              text='Link para Home'
              className='linkHome'
              style={{ textDecoration: 'none' }}>
              <span>hashtag</span>
              <span className={styles2.tituloNegrito}>finder</span>
            </Link>
          </div>

          <div className={styles2.containerCabecalhoBotoes}>
            <BotaoHome pagina={'Home'} />
            <BotaoSair pagina={'Sair'} />
          </div>
        </div>
      </header>

      <Container>
        <h1 className={styles.titulo}>Buscas realizadas</h1>
        <div className={styles.listagem}>
          <div className={`${styles.header} ${styles.alinhamento}`}>
            <div>Hashtag</div>
            <div>Data</div>
            <div>Hora</div>
          </div>

          {lista.map((user, i) => (
            <div className={`${styles.linha} ${styles.alinhamento}`} key={i}>
              <div>{user.fields.Hashtag}</div>
              <div>{formataData(user.fields.Data)}</div>
              <div>{formataHora(user.fields.Data)}</div>
            </div>
          ))}
        </div>
      </Container>

      <div className={styles.container}>
        <div className={styles.containerBotaoTopoPagina}>
          <button
            className={styles.botaoTopoPagina}
            id='botaoTopoPagina'
            onClick={() => botaoTopoPagina()}>
            🔺
          </button>
        </div>
      </div>

      <div id='sentinela'></div>
    </div>
  );
}

export default Lista;
