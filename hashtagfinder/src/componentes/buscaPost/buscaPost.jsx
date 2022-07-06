export default function BuscaPost({ valor }) {
  console.log("valor chegado: " + valor);

  function fetchPost(valor) {
    console.log("valor na funçao: " + valor);
    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas", {
      method: "POST",
      headers: {
        Authorization: "Bearer key2CwkHb0CKumjuM",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Squad: "04-22",
              Hashtag: valor,
              Data: new Date().getTime(),
            },
          },
        ],
      }),
    });
  }
  return (
    <div>
      {fetchPost(valor)}
      {valor}
    </div>
  );
}
