import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PainelContadores from './paineis/PainelContadores';
import FormBuscaGithub from './formularios/FormBuscaGithub';
import ListaGithub from './listas/ListaGithub';

class App extends Component {

  state = {
    cardsGithub: []
  };

  adicionarNovoCard = (cardInfo) => {
    this.setState((prevState) => ({
      cardsGithub: prevState.cardsGithub.concat(cardInfo)
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          Aqui tem os contadores
          <PainelContadores></PainelContadores>
        </div>
        <br />
        <div>
          Aqui tem a busca pela API do Github
          <FormBuscaGithub onSubmit={this.adicionarNovoCard}></FormBuscaGithub>
          <ListaGithub cards={this.state.cardsGithub}></ListaGithub>
        </div>
      </div>
    );
  }
}

export default App;
