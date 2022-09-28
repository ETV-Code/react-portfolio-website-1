import React from 'react'

import { AiOutlineHtml5,AiOutlineGithub} from "react-icons/ai";
import { DiCss3, DiSass, DiNpm } from "react-icons/di";
import { 
  SiJavascript, 
  SiRedux, 
  SiReactrouter, 
  SiStyledcomponents, 
  SiTailwindcss, 
  SiMaterialui, 
  SiWebpack  
} from "react-icons/si";

import { FaReact, FaGitAlt } from "react-icons/fa";
import { GiDatabase} from "react-icons/gi";


import style from './Skills.module.css'


const Skills = () => {
  return (
    <section id="skills">
      <h5>
        What Skills I Have
      </h5>
      <h2>
        My skills
      </h2>

      <div className={`container ${style.experience__container}`}>

        <div className={style.experience__skills}>

          <h3>Knowledge</h3>

          <div className={style.skills__content}>

            <article className={style.skills__details}>

              <AiOutlineHtml5 className={style.skill}/>
              <h4>HTML</h4>
              
            </article>

            <article className={style.skills__details}>

              <DiCss3 className={style.skill}/>
              <h4>CSS</h4>

            </article>

            <article className={style.skills__details}>

              <SiJavascript className={style.skill}/>
              <h4>JavaScript</h4>

            </article>

            <article className={style.skills__details}>

              <FaReact className={style.skill}/>
              <h4>React.js</h4>

            </article>

            <article className={style.skills__details}>

              <FaGitAlt className={style.skill}/>
              <h4>Git</h4>

            </article>

          </div>
        </div>

        <div className={style.experience__tools}>
          <h3>Tools</h3>

          <div className={style.skills__content}>

            <article className={style.skills__details}>

              <SiRedux className={style.skill}/>
              <h4>Redux</h4>
              
            </article>

            <article className={style.skills__details}>

              <SiReactrouter className={style.skill}/>
              <h4>React Router Dom</h4>

            </article>

            <article className={style.skills__details}>

              <SiStyledcomponents className={style.skill}/>
              <h4>Css Modules</h4>

            </article>

            <article className={style.skills__details}>

              <DiSass className={style.skill}/>
              <h4>Sass</h4>

            </article>

            <article className={style.skills__details}>

              <SiTailwindcss className={style.skill}/>
              <h4>Tailwind</h4>

            </article>

            <article className={style.skills__details}>

              <SiMaterialui className={style.skill}/>
              <h4>MaterialUi</h4>

            </article>
            <article className={style.skills__details}>

              <SiWebpack className={style.skill}/>
              <h4>Webpack</h4>

            </article>
            <article className={style.skills__details}>

              <GiDatabase className={style.skill}/>
              <h4>SQL</h4>

            </article>
            <article className={style.skills__details}>

              <DiNpm className={style.skill}/>
              <h4>NPM</h4>

            </article>
            <article className={style.skills__details}>

              <AiOutlineGithub className={style.skill}/>
              <h4>Github</h4>

            </article>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills