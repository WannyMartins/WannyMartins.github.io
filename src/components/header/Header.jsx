import React, { useContext } from 'react';
import { MdEmail, MdPerson } from "react-icons/md";
import MyContext from '../../context/MyContext';
import './header.scss';

function Header() {
  const {openMenu, setOpenMenu} = useContext(MyContext);

  return (

    <div className={'header ' + (openMenu && 'active')}> 
      <div className="wrapper">
        <div className="left">
          <a href='#intro'className='logo'>portfólio.</a>
          <div className="itemContainer">
            <MdPerson className='icon'/>
            <span>(31) 9 9670-7307</span>
          </div>
          <div className="itemContainer">
            <MdEmail className='icon'/>
            <span>wcatery@gmail.com</span>
          </div>


        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setOpenMenu(!openMenu)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header