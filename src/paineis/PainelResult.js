import React from 'react';

export const PainelResult = (props) => {
    return (
        <div>
            Aumenta o count: {props.totalContador}
            <div>
                Texto do input: {props.textoInput}
            </div>
        </div>
    );
};

export default PainelResult;