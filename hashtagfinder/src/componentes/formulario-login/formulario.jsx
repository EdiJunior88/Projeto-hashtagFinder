import React from "react";
import "../../css/reset.css";
import styles from "../../componentes/formulario-login/formulario.module.css";
import * as yup from "yup";
import { useFormik } from "formik";

export default function Formulario() {
  
  //  Validação e-mail e senha com yup e formik

  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },

    validationSchema: yup.object({
      email: yup
        .string()
        .email("E-mail inválido.")
        .required("Por favor, insira seu e-mail."),
      senha: yup
        .string()
        .required("Por favor, insira sua senha.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Senha inválida. A senha deve conter 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial."
        ),
    }),
    onSubmit: (values) => {
      alert.apply(JSON.stringify(values, null, 2));
    },
  });

  // Configuração airtable

  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey: "key2CwkHb0CKumjuM",
  });

  var base = Airtable.base("app6wQWfM6eJngkD4");

  // Localizando dados da Squad 04-22 pelo id

  base("Login").find("recnZdZzygRimrOMB", function (err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Retrieved", record.fields);
  });

  return (
    <div className={styles.containerFormulario}>
      <div className={styles.formulario}>
        <h1 className={styles.formularioTitulo}>Login</h1>
        <form onSubmit={formik.handleSubmit} className="formulario">
          <div className={styles.formularioUsuario}>
            <label htmlFor="email">Usuário</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.mensagemErro}>{formik.errors.email}</div>
          ) : null}

          <div className={styles.formularioSenha}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senha}
            />
          </div>
          {formik.touched.senha && formik.errors.senha ? (
            <div className={styles.mensagemErro}>{formik.errors.senha}</div>
          ) : null}
          <div className={styles.formularioBotaoDiv}>
            <button type="submit" className={styles.formularioBotaoAcessar}>
              Acessar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
