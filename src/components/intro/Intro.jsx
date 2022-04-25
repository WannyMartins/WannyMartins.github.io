import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import './intro.scss';


function Intro() {
  const myText = useRef();

// https://www.npmjs.com/package/ityped === ref da animção das letras
  useEffect(() => {
    init(myText.current, { 
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Front-End', 'Javascript', 'React', 'Redux' ] 
    })
  }, [])
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="imagens/foto1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá! Eu sou</h2>
          <h1>Wanny Martins</h1>
          <h3>Desenvolvedora <span ref={myText}></span></h3>
        </div>
        <a href="#portfolio">
          <RiArrowDownSLine className='arrow'/>
        </a>
      </div>
    </div>
  )
}

export default Intro