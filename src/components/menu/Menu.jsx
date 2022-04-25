import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './menu.scss';

function Menu() {

  const {openMenu, setOpenMenu} = useContext(MyContext);

  return (
    <div className={'menu ' + (openMenu && 'active')}>
      <ul>
        <li onClick={() => setOpenMenu(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li  onClick={() => setOpenMenu(false)}> 
          <a href='#portifolio'>Portfólio</a>
        </li>
        <li onClick={() => setOpenMenu(false)}> 
          <a href='#projects'>Projetos</a>
        </li>
        <li onClick={() => setOpenMenu(false)}> 
          <a href='#contact'>Contatos</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu