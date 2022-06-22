import React from "react";
import "../../css/reset.css"
import styles from "../../componentes/formulario-login/formulario.module.css"

const Formulario = () => {
  return (
    <div className={styles.containerFormulario}>
      <div className={styles.formulario}>
        <h1 className={styles.formularioTitulo}>Login</h1>
        <form action="" className="formulario">
          <div className={styles.formularioUsuario}>
            <label>Usuário</label>
            <input type="text" />
          </div>

          <div className={styles.formularioSenha}>
            <label>Senha</label>
            <input type="password" />
          </div>
          <div className={styles.formularioBotaoDiv}>
            <button className={styles.formularioBotaoAcessar}>
                Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
