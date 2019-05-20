import React from "react"
//import Filho from "./Filho"
import Mae from "./Mae"
import {childrenWithProps} from "../utils/utils"
export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Esposa</h2>
     <ul><Mae {...props} nome="Belarminda"/></ul> 
    <h2>Filhos</h2>
    <ul>
        {/* como flexibilizar o PAI para que add vários tipos de Pais
        para tal, importamos o filho no INDEX.JS 
        <Filho nome="João" sobrenome={props.sobrenome}/>
        <Filho {...props} nome="Igor"/>
        <Filho {...props} nome="Sabrina"/> */}
        
        {childrenWithProps(props)}
    </ul>
</div>