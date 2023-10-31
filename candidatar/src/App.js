import logo from './logo.svg';
import './App.css';
import Topo from './Topo';
import Formulario from './Formulario';
import Informações from './informações';
import { useState } from 'react';

function App() {
  const [informações, Setinformações] = useState([])

  function onAddInformações(nome, email) {
    let info = new Informações(nome, email)
    Setinformações([...informações, info])
  }

  return (
    <div>
      <Topo></Topo>
      <Formulario onAddInformações={onAddInformações}></Formulario>
    </div>
  );
}

export default App;
