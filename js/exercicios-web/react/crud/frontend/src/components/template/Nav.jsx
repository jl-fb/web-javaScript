import React from 'react';
import './Nav.css';
import NavItem from './NavItem';

export default props =>
    <aside className="menu-area">
        {/* Refatorar para o Nav ter o componente Itens já q a estrutura repete*/}
        <nav className="menu">
        <NavItem {...props}/>
        <NavItem icon="users" id="users" title="usuários"/>
        </nav> 
    </aside>
