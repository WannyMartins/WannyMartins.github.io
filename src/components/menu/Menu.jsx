import React from 'react';
import './menu.css';

function Menu() {


  return (
    <div className="menu">
     
      <ul>
        <li >
          <a href='#intro'>Home</a>
        </li>
        <li > 
          <a href='#projects'>Projetos</a>
        </li>
        <li > 
          <a href='#contact'>Contatos</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu