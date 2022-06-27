import React from "react";
import "../../css/reset.css";
import styles from "../../componentes/formulario-login/formulario.module.css";

export default function Formulario() {

  //  Validação e-mail e senha

  function validarEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  }

  function validarSenha(senha) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    return senhaRegex.test(String(senha))
  }
  
  // Configuração airtable
  
  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: "key2CwkHb0CKumjuM",
  });

  var base = Airtable.base("app6wQWfM6eJngkD4");

  // Localizando dados da Squad 04-22 pelo id

  base("Login")
    .find('recnZdZzygRimrOMB', function(err, record) {
      if (err) { console.error(err); return; }
      console.log('Retrieved', record.fields['Squad', 'Email']);
    });

  return (
    <>
      <div className={styles.containerFormulario}>
        <h1 className={styles.formularioTitulo}>Login</h1>
        <form action="" className="formulario">
          <div className={styles.formularioUsuario}>
            <label>Usuário</label>
            <input type="text" name="email" required />
          </div>

          <div className={styles.formularioSenha}>
            <label>Senha</label>
            <input type="password" required />
          </div>
          <div className={styles.formularioBotaoDiv}>
            <button className={styles.formularioBotaoAcessar}>Acessar</button>
          </div>
        </form>
      </div>
    </>
  );
}
