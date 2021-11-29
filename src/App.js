import React from 'react';
import {BrowserRouter, Switch, Route,} from 'react-router-dom';

import Login from './pages/Login';
import Map from './pages/Mapa';
import Empresas from './pages/Empresas';
import Produtos from './pages/Produtos';
import Estoque from './pages/Estoque';


function App () {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/Mapa" exact component={Map} />
      <Route path="/Empresas"  component={Empresas} />
      <Route path="/Produtos"  component={Produtos} />
      <Route path="/Estoque"  component={Estoque} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
