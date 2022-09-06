import React from 'react'

//components
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

//react-icons
import {FaArrowRight} from 'react-icons/fa'

//assets
import ME from '../../assets/me.png'

//styles
import style from './Header.module.css'


const Header = () => {
  return (
    <header className={style.header} id="home" >

      <div 
        className={`container ${style.header__container} `}
        
        // className= 'container'
      >

        <h5>
          Hola Soy 
        </h5>

        <h1 className={style.name}>
          Emmanuel Taborda
        </h1>

        <h5 
          className="text__light"
        >
          Software Developer
        </h5>

        <CTA/>
        <HeaderSocials/>

        <div className={style.me}>

          <img 
            src={ME} 
            alt="Emmanuel Taborda" 
            className={style.me__img}
          />

        </div>

        <a 
          className={style.scroll__down}

          href="#contact" 
        >
         Scroll Down <br/> <FaArrowRight/>
        </a>
      </div>

    </header>
  )
}

export default Header