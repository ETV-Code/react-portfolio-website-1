import React from 'react'

//react-icons
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

//styles
import style from './Header.module.css'

const HeaderSocials = () => {
  return (

    <div 
        className={style.header__socials}
    >
        <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel='noopener noreferrer'
        >
            <BsLinkedin/>
        </a>

        <a 
            href="https://github.com" 
            target="_blank" 
            rel='noopener noreferrer'
        >
            <BsGithub/>
        </a>

    </div>

  )
}

export default HeaderSocials