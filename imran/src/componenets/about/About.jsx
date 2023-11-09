import React from 'react'
import './about.css'
import ME from '../../assets/me1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
            <FaAward className='about__icon'/>
             <h5> Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
            <FiUsers className='about__icon'/>
             <h5> companies</h5>
              <small>2+ more</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
             <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p> I hope you're doing well. My name is Mohammad Imran and I am highly intersted in Problem solving and Development So, I am here to show my interest in exploring new 
            opportunities in IT sector, If your company have any opening ,I'd appreciate the chance to discuss how my background could be a good fit . Enjoy your day.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
