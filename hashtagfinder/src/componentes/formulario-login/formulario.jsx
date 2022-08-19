import React, { useState } from "react";
import "../../css/reset.css";
import styles from "../../componentes/formulario-login/formulario.module.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { UsarAutenticacao } from "../../providers/autenticar";
import { useNavigate } from "react-router-dom";

/* Título da página */
import useDocumentTitle from "@tanem/use-document-title";

export default function Formulario() {
  const autenticacao = UsarAutenticacao();
  const navegacao = useNavigate();
  const [dadosInvalidos, setDadosInvalidos] = useState("");

  /* Título da Página */
  useDocumentTitle("hashtag | Login");

  /* Chave da API AirTable oculta */
  const API_KEY = process.env.REACT_APP_API_KEY;

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
      senha: yup.string().required("Por favor, insira sua senha."),
    }),

    validateOnChange: false,
    validateOnBlur: false,

    // Função onSubmit do Formik
    onSubmit: (values) => {
      // Inserção dos dados da API do Airtable para checagem dos dados do usuario
      var url =
        "https://api.airtable.com/v0/appUf3f0O3QvA6QMd/Login?filterByFormula=AND" +
        `({Squad}='04-22',{Email}='${values.email}',{Senha}='${values.senha}')`;

      fetch(encodeURI(url), {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }) // Fazendo login se senha e e-mail forem iguais ao recuperado na Squad 04-22
        .then((response) => response.json())
        .then(function (response) {
          if (response.records[0] !== undefined) {
            autenticacao.login(true);
            navegacao("/lista", { replace: true });
          }
          return setDadosInvalidos(
            "Usuário e/ou senha inválidos! Verifique seus dados e tente novamente."
          );
        });
    },
  });

  // Removendo espaços em branco no campo e-mail
  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const handleChangeWhiteSpace = (e) => {
    e.target.value = e.target.value.replace(/\s+/g, "");
  };

  return (
    <div className={styles.containerFormulario}>
      <div className={styles.formulario}>
        <h1 className={styles.formularioTitulo}>Login</h1>
        {/* Formulário */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          className="formulario"
        >
          {/* Campo de usuário/e-mail */}
          <div className={styles.formularioUsuario}>
            <label htmlFor="email">Usuário</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                formik.handleChange(e);
                handleChangeWhiteSpace(e);
              }}
              onKeyDown={handleKeyDown}
              value={formik.values.email}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.mensagemErro}>{formik.errors.email}</div>
          ) : null}
          {/* Campo de senha */}
          <div className={styles.formularioSenha}>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              onChange={formik.handleChange}
              value={formik.values.senha}
            />
          </div>
          {formik.touched.senha && formik.errors.senha ? (
            <div className={styles.mensagemErro}>{formik.errors.senha}</div>
          ) : null}
          <div className={styles.mensagemDeErro} id="messagemDeErro">
            {dadosInvalidos}
          </div>
          {/* Botão de acesso */}
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
