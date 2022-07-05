import React from "react";
import "../../css/reset.css";
import styles from "../../componentes/formulario-login/formulario.module.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { UsarAutenticacao } from "../../providers/autenticar";
import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const autenticacao = UsarAutenticacao();
  const navegacao = useNavigate();

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

    // Função onSubmit do Formik

    onSubmit: (values) => {
      // Inserção dos dados da API do Airtable para checagem dos dados do usuario

      fetch(
        "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?filterByFormula=AND" +
          encodeURI`({Squad} = '04-22', {Email} = 'usuario@newtab.academy', {Senha} = 'S3nh4123!')`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer key2CwkHb0CKumjuM",
          },
        }
      ) // Mapeando os dados da API e fazendo login se senha e e-mail forem iguais ao recuperado na Squad 04-22
        .then((response) => response.json())
        .then(function (dados) {
          dados.records.map((dado) => {
            if (
              dado.fields.Email === values.email &&
              dado.fields.Senha === values.senha
            ) {
              autenticacao.login(true);
              navegacao("/lista", { replace: true });
            }
            return null;
          });
          // Inserção de mensagem de erro se os dados não corresponderem - VERIFICAR
        });
    },
  });

  return (
    <>
      <div className={styles.containerFormulario}>
        <div className={styles.formulario}>
          <h1 className={styles.formularioTitulo}>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              formik.handleSubmit(e);
            }}
            className="formulario"
          >
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
    </>
  );
}
