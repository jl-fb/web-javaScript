import React from 'react';
import ReactDOM from 'react-dom';

//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'

//Importar multiplos componentes (módulos/funções) usar as "{}" para desestruturar o módulo
//import {BoaTarde, BoaNoite} from './componentes/Multiplos'
//ou
//import Multi from './componentes/Multiplos'
//import Saudacao from './componentes/Saudacao'

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))

/* ReactDOM.render(
<div>
    <BomDia name="João"/>
    <Multi.BoaTarde name="Ana"/>
    <BoaNoite name="Bia"/>
</div>, document.getElementById('root')) */

/* ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome="João"/>
    </div>
,document.getElementById('root')) */

import Pai from "./componentes/Pai"
import Filho from "./componentes/Filho"
import Mae from "./componentes/Mae"
ReactDOM.render(
    <div>
        <Pai nome="Luiz Gonzaga" sobrenome="Borghezan">
        {/* como passo os componentes Filhos aqui? */}
            <Filho nome="João" />
            <Filho nome="Sabrina" />
            <Filho nome="Igor" />
        </Pai>
    </div>,document.getElementById("root"))