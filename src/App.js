import logo from './logo.svg';
import './App.css';
import React from 'react';
import NovoComponente from './basicos/NovoComponente';

function App() {
  return (
    <div>
      <h1>Meu App React</h1>
      <NovoComponente tituloH1="Disciplina: Front End II" tituloH2="Desenvolvido por: Leonardo de Almeida Camboim" />
    </div>
  );
}


export default App;
