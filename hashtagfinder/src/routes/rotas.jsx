<<<<<<< HEAD
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../paginas/home/home';
import Login from '../paginas/login/login';
import Sobre from '../paginas/sobre/Sobre';
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../paginas/home/home";
import Login from "../paginas/login/login";
import Sobre from "../paginas/sobre/sobre";
import Lista from "../paginas/lista/Lista";
>>>>>>> 69eac633d06f69d97de8b9db10b35054672723fc

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
