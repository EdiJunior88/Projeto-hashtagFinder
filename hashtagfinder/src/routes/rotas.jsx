import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../paginas/home/home';
import Login from '../paginas/login/login';
import Sobre from '../paginas/sobre/sobre';
import Lista from '../paginas/lista/Lista';

const Rotas = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/sobre' element={<Sobre />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/lista' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
