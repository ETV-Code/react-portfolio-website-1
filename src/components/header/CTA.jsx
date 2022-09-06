import React from 'react'

//assets
import CV from '../../assets/CV.pdf'

//react-icons
import {RiKakaoTalkFill} from 'react-icons/ri'

//styles
import style from './Header.module.css'


const CTA = () => {
  return (
    <div className={style.cta}>
        <a 
            className='btn btn-primary'

            href={CV}
            download 
            target="_blank" 
            rel='noopener noreferrer'
        >
            Download CV
        </a>

        <a 
            className='btn-secundary'

            href="#contact"
        >
          
            let's talk <RiKakaoTalkFill className={style.talk}/>
     
        </a>
    </div>
  )
}

export default CTA