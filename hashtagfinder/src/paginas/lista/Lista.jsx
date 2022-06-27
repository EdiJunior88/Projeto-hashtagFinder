import Container from '../../componentes/container/Container';
import styles from './Lista.module.css';
import styles2 from '../../componentes/cabecalho/Cabecalho.module.css';
import BotaoHome from '../../componentes/botoes/botaoHome';
import BotaoSair from '../../componentes/botoes/botaoSair';
import { Link } from 'react-router-dom';

function Lista() {
  const lista = [
    {
      nome: 'fulano de tal',
      data: '20/06',
      hora: '22:00',
    },
    {
      nome: 'fulano de tal 2',
      data: '21/06',
      hora: '21:00',
    },
    {
      nome: 'fulano de tal 3',
      data: '22/06',
      hora: '12:00',
    },
    {
      nome: 'fulano de tal 4',
      data: '23/06',
      hora: '16:30',
    },
    {
      nome: 'fulano de tal 5',
      data: '24/06',
      hora: '20:00',
    },
  ];

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

          {lista.map((user) => (
            <div className={`${styles.linha} ${styles.alinhamento}`}>
              <div>{user.nome}</div>
              <div>{user.data}</div>
              <div>{user.hora}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Lista;
