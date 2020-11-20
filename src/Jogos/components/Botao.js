

import React from 'react'
import './Botao.css';

export default props => {

    return (
        <button id={props.id} class={'calcu ' +props.classe} onClick={ () => props.valor(props.id)}>{props.label}</button> 
        
    )
}


