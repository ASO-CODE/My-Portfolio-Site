import React from 'react'
import './experience.css'
import { FaHtml5 } from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import { FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skill Set</h5>
      <h2>& Experience Level</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
               <div><h4>HTML</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <FaCss3 className='experience__details-icon'/>
              <div><h4>CSS</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div><h4>Tailwindcss</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <div><h4>Javascript</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
            <div> <h4>React</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience