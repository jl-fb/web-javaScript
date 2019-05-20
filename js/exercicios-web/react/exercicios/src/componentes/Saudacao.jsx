import React , {Component} from 'react';

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    //construtor de estados
    constructor(props){
        super(props)
        this.setNome = this.setNome.bind(this)
    }
    setTipo(e){
       this.setState({tipo: e.target.value}) // this.props.tipo = e.target.value para podermos mudar os dados do componente precisamos mudar o state
    }
    setNome(e){
        this.setState({nome: e.target.value})// this.props.nome = e.target.value  para podermos mudar os dados do componente precisamos mudar o state
    }
    render(){
        const { tipo, nome} = this.state //seria o "this.props" mas para podermos mudar os dados do componente precisamos mudar o state
        return (
            <div>
                <h1>{tipo} {nome}!!!</h1>
                <hr/>
                <input type="text" value={tipo} placeholder="Tipo..." onChange = { e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}