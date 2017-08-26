import React from 'react';

export default class ContadorText extends React.Component {
    handleChange = (event) => {
        this.props.onNomeChange(event.target.value);
    }

    render() {
        return (
            <input type="text"
                onChange={this.handleChange} />
        );
    }
}