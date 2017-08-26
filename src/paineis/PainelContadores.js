import React from 'react';
import BtnContador from '../botoes/BtnContador';
import PainelResult from './PainelResult';
import ContadorText from '../customInputs/ContadorText';

export default class PainelContadores extends React.Component {
    state = { totalContador: 20, nome: '' };

    incrementarContador = (valorIncrementar) => {
        this.setState((prevState) => ({
            totalContador: prevState.totalContador + valorIncrementar
        }));
    };

    setNome = (novoNome) => {
        this.setState((prevState) => ({
            nome: novoNome
        }));
    };    

    render() {
        return (
            <div>
                <BtnContador valorIncrementar={5} onClickFunction={this.incrementarContador}></BtnContador>
                <br />
                <ContadorText onNomeChange={this.setNome}></ContadorText>

                <PainelResult totalContador={this.state.totalContador} textoInput={this.state.nome} ></PainelResult>
            </div>
        );
    }
}