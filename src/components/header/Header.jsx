import React from 'react';
import { MdEmail, MdPerson } from "react-icons/md";
import Menu from '../menu/Menu';
// import MyContext from '../../context/MyContext';
import './header.css';

function Header() {
  // const {openMenu, setOpenMenu} = useContext(MyContext);

  return (
    <div className="header"> 
        {/* <div className={'header ' + (openMenu && 'active')}>  */}


        <div className="dados">
          <a href='#intro' className='logoContainer'>
            <img src="imagens/logo-sbg-green.png" 
            alt="logo" className='logo'/>
          </a>
          <div className="itemContainer">
            <MdPerson className='icon'/>
            <span>(31) 9 9670-7307</span>
          </div>
          <div className="itemContainer">
            <MdEmail className='icon'/>
            <span>wcatery@gmail.com</span>
          </div>


      </div>
          <Menu/>
    </div>
  )
}

export default Header