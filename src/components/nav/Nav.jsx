import React from 'react'

import { useState } from 'react'

import {GoHome, GoSettings} from 'react-icons/go'
import {BsFileEarmarkPerson} from 'react-icons/bs'
import {AiOutlineFileDone} from 'react-icons/ai'
import {RiKakaoTalkFill} from 'react-icons/ri'

import style from './Nav.module.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#home')

  return (
    <nav className={style.nav}>
      <a 
        href='#home' 

        className={
          `
            ${activeNav === '#home' 
            ? style.active 
            : null}
          `
        }

        onClick={() => setActiveNav('#home')}
      > 
        <GoHome/>
      </a>
      <a 
        href="#about"

        className={
          `
            ${activeNav === '#about' 
            ? style.active 
            : null}
          `
        }

        onClick={() => setActiveNav('#about')}
      > 
        <BsFileEarmarkPerson/>
      </a>
      <a 
        href="#skills" 
        className={`${activeNav === '#skills' ? style.active : null}`}
        onClick={() => setActiveNav('#skills')}


      > 
        <GoSettings/>
      </a>
      <a 
        href="#projects"

        className={
          `
            ${activeNav === '#projects' 
            ? style.active 
            : null}
          `
        }

        onClick={() => setActiveNav('#projects')}

      > 
        <AiOutlineFileDone/>
      </a>
      <a 
        href="#contact" 
        className= {
          `
            ${activeNav === '#contact' 
            ? style.active 
            : null}
          `
        }

        onClick={() => setActiveNav('#contact')}

      > 
        <RiKakaoTalkFill/>
      </a>
    </nav>
  )
}

export default Nav