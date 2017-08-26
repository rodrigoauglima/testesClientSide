import React from 'react';

export default class BtnContador extends React.Component {
    handleClick = () => {
        this.props.onClickFunction(this.props.valorIncrementar);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.valorIncrementar}
            </button>
        );
    }
}