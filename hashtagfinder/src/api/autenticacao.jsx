export const Autenticacao = () => {

    const usuario = { estaLogado: true };
    return usuario && usuario.estaLogado;

    // fetch('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=AND' + encodeURI`({Squad} = '04-22', {Email} = 'usuario@newtab.academy', {Senha} = 'S3nh4123!')`, {
    //     headers: {
    //       Authorization: 'Bearer key2CwkHb0CKumjuM'
    //     }
    //   }).then(raw => raw.json()).then(response => {
    //     console.log(response)

    //   })

}

    


