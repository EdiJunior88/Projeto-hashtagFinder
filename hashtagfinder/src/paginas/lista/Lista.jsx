import Container from "../../componentes/container/Container";
import styles from "./Lista.module.css";
import styles2 from "../../componentes/cabecalho/Cabecalho.module.css";
import BotaoHome from "../../componentes/botoes/botaoHome";
import BotaoSair from "../../componentes/botoes/botaoSair";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Lista() {
  const [lista, setLista] = useState([]);
  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entradas) => {
      // se o elemento que estiver observando estiver visivel irá executar o código para trazer a próxima página de conteúdo
      if (entradas.some((scroll) => scroll.isIntersecting)) {
        //setLoading(true);
        console.log("Elemento está visível", entradas);

        /*
        function fetchMoreData() {
          const newSearch = document.getElementById("input").value;
          setSearchValue(newSearch);
          setResultsNumber(resultsNumber + 5);
        }
        setTimeout(() => setLoading(false), 2000);
        setTimeout(() => fetchMoreData(), 1500);

        */
      }

      /*
      else if (entradas.some((scroll) => scroll.isVisible === false)) {
        setLoading(false);
        console.log("Elemento está invisível", entradas);
      }
      */
    });

    //esse metodo observa algum elemento da página
    intersectionObserver.observe(document.querySelector("#sentinela"));

    //"&offset=" +  encodeURI("itrngCtv1y345v2yq/recg9JPSSqLO6IfzD") +

    fetch(
      "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas?filterByFormula=" +
        encodeURI("({Squad}='04-22')") +
        "&pageSize=20&&sort" +
        encodeURI("[0][field]=Data") +
        "&sort" +
        encodeURI("[0][direction]=desc"),

      {
        headers: {
          Authorization: "Bearer key2CwkHb0CKumjuM",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setLista(result.records))
      .catch((error) => console.log("errorssss", error));

    return () => intersectionObserver.disconnect();
  }, []);

  // Estou usando a api Intl para formatar data e hora regional com pouco código
  // Link com exemplos de uso https://devhints.io/wip/intl-datetime
  function formataData(data) {
    let novaData = new Intl.DateTimeFormat("pt-br", {
      day: "2-digit",
      month: "2-digit",
    }).format(data);
    return novaData;
  }

  function formataHora(hora) {
    let novaHora = new Intl.DateTimeFormat("pt-br", {
      hour: "numeric",
      minute: "numeric",
    }).format(hora);
    return novaHora;
  }

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
              <div>{formataData(user.fields.Data)}</div>
              <div>{formataHora(user.fields.Data)}</div>
            </div>
          ))}
        </div>
      </Container>
      <div id="sentinela"></div>
    </div>
  );
}

export default Lista;
