import React from 'react'

import style from './Header.module.css'

import logo from '../assets/monograma.jpg'

const Header = () => {
  return (
    <>
      <div className={style.container}>

        <div className={style.nav__content}>

          <div className={style.nav__logo}>
      
            <img 
              src={logo} alt="logo"
              className={style.logo_img}
            />

            <p className={style.nav__logo_text}>
              Emmanuel Taborda V.
            </p>
          </div>

          <div>
            <nav className={style.nav__links}>
              <a href="www.google.com" className={style.nav__link} >Home</a>
              <a href="www.google.com" className={style.nav__link}>gitHub</a>
              <a href="www.google.com" className={style.nav__link}>LinkedIn</a>
            </nav>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header