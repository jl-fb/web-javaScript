import React from "react";
import "./Button.css"

//qt mais componentes sem estados forem criados melhor para a aplicação
export default props => 
    <button
        onClick={e=> props.click && props.click(props.label)} 
        className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
    `}> 
        {props.label}
    </button>