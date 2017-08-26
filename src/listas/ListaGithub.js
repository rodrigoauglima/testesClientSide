import React from 'react';

import CardGithub from '../cards/CardGithub';

export const ListaGithub = (props) => {
    return (
        <div>
            {props.cards.map(card => <CardGithub key={card.id} {...card} />)}
        </div>
    );
}

export default ListaGithub;