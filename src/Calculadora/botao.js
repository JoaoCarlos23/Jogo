
import React from 'react'
import './botao.css';

export default props => {

    return (
        <button  class={props.classe} onClick={ () => props.valor(props.label)}>{props.label}</button> 
        
    )
}





