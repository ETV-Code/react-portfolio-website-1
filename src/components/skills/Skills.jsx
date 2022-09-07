import React from 'react'

import { AiOutlineHtml5,AiOutlineGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact, FaGitAlt } from "react-icons/fa";


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
        <div className="experience__skills">
          <h3>Knowledge</h3>

          <div className="skills__content">

            <article className="skills__details">

              <AiOutlineHtml5 className='skill'/>
              <h4>HTML</h4>
              
            </article>

            <article className="skills__details">

              <DiCss3 className='skill'/>
              <h4>CSS</h4>

            </article>

            <article className="skills__details">

              <SiJavascript className='skill'/>
              <h4>JavaScript</h4>

            </article>

            <article className="skills__details">

              <FaReact className='skill'/>
              <h4>React.js</h4>

            </article>

            <article className="skills__details">

              <FaGitAlt className='skill'/>
              <h4>Git</h4>

            </article>

            <article className="skills__details">

              <AiOutlineGithub className='skill'/>
              <h4>GitHub</h4>

            </article>

          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills