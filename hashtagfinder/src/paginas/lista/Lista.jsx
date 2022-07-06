import Container from "../../componentes/container/Container";
import styles from "./Lista.module.css";
import styles2 from "../../componentes/cabecalho/Cabecalho.module.css";
import BotaoHome from "../../componentes/botoes/botaoHome";
import BotaoSair from "../../componentes/botoes/botaoSair";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BuscaPost from "../../componentes/buscaPost/buscaPost";

function Lista() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=" +
        encodeURI("({Squad}='04-22')"),
      {
        headers: {
          Authorization: "Bearer key2CwkHb0CKumjuM",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setLista(result.records))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.fundo}>
      <header className={styles2.container}>
        <div className={styles2.containerCabecalho}>
          <div className={styles2.cabecalhoTitulo}>
            <Link
              to="/"
              text="Link para Home"
              className="linkHome"
              style={{ textDecoration: "none" }}
            >
              <span>hashtag</span>
              <span className={styles2.tituloNegrito}>finder</span>
            </Link>
          </div>

          <div className={styles2.containerCabecalhoBotoes}>
            <BotaoHome pagina={"Home"} />
            <BotaoSair pagina={"Sair"} />
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
              <div>{user.fields.Data}</div>
              <div>{user.fields.Data}</div>
            </div>
          ))}
        </div>

        <BuscaPost valor="teste 2" />
      </Container>
    </div>
  );
}

export default Lista;
