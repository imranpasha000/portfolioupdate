import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/doctor.jpeg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


const Portfolio = () => {
  return (
    <section id='posrtfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Doctor therapist websites</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>E-commerce Shopping websites</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Movis Application websites</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Todo List</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Persnal Portfolio</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Temperature websites</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://dribble.com/Alien_pixel" className='btn btn-primary' target='_blank'> Live Demo</a>
          </div>
        </article>



        

        

        

       

        
      </div>
      </section>
  )
}

export default Portfolio
