const airtableBuscaHashtag = async (searchValue) => {
  /* Chave da API AirTable oculta */
  const API_KEY = process.env.REACT_APP_API_KEY;

  //------------------------------- INICIO DO FETCH -------------------------------
  // Esse fetch salva a pesquisa no airtable para depois ser puxado na listagem de histórico
  fetch("https://api.airtable.com/v0/appUf3f0O3QvA6QMd/Buscas", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      records: [
        {
          fields: {
            Squad: "04-22",
            Hashtag: searchValue,
            Data: new Date().getTime(),
          },
        },
      ],
    }),
  });

  //console.log("sucess");
  //------------------------------- FIM DO FETCH -------------------------------
};

export { airtableBuscaHashtag };
