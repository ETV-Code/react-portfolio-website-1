import React from "react";

import ME from '../../assets/me.png'

import {GiStarMedal} from 'react-icons/gi'
import {FaGreaterThan} from 'react-icons/fa'

import style from './About.module.css'

const About = () => {
  return (
    <section id="about">

      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className={`container ${style.about__container} `}>

        <div className={style.about__me}>

          <div className={style.about__me_img}>

            <img src={ME} alt="About img" />

          </div>

        </div>

        <div className={style.about__content}>

          <div className={style.about__cards}>

            <article className={style.about__card}>

              <GiStarMedal className={style.about__icon}/>
              <h4>Experience</h4>
              <small className={style.small}> 6+ Mounths Working</small>

            </article>

          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas odit, totam at eius, eum expedita quam culpa beatae ad, saepe cumque delectus quis perspiciatis consequuntur! Officiis dolores adipisci vero earum.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk <FaGreaterThan />
          </a>
        </div>

      </div>
    </section>
  )
}

export default About