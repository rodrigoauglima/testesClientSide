import React from 'react';

export default class FormBuscaGithub extends React.Component {
    state = { username: '' };

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://api.github.com/users/${this.state.username}`)
            .then((response) => response.json())
            .then((dadosApi) => {
                this.props.onSubmit(dadosApi);
                this.setState({ username: '' })
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="github username"
                    onChange={(event) => this.setState({ username: event.target.value })}
                    value={this.state.username}
                />
                <button type="submit">Adicionar card á lista</button>
            </form>
        );
    };
}