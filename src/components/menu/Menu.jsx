import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './menu.css';

function Menu() {

  const {active, setActive} = useContext(MyContext);

  function onClick(){
    setActive(true);
  }

  return (
    <div className="menu">
     
      <ul>
        <li onClick={(e) => e.target = onclick()}>
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