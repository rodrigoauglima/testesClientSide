import React from 'react';

export const CardGithub = (props) => {
    return (
        <div>
            <img alt="batata" width="75" src={props.avatar_url} />
            <div>
                <div>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export default CardGithub;