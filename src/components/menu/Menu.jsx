import React from 'react';
import './menu.css';

function Menu() {


  return (
    <div className="menu">
     
      <ul className='ulContainer'>
        <li className='liItem'>
          <a className='aMenu' href='#intro'>Home</a>
        </li>
        <li className='liItem'>
          <a className='aMenu' href='#projects'>Projetos</a>
        </li>
        <li className='liItem'>
          <a className='aMenu' href='#contact'>Contatos</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu