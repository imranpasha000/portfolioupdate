
import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2> Services</h2>

      <div className='container services__container'>
        
   <article className='service'>
          <div className='service__head'>
            <h3>FullStack Development </h3>
          </div>
           <ul className='service__list'>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>  HTML</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>JAVASCRIPT</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>DATABASES</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>MONGODB</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>MYSQL</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>DEPLOYMENT</p>
            </li>
            
           </ul>

        </article>
        
   <article className='service'>
          <div className='service__head'>
            <h3>Front-end Developemnt </h3>
          </div>
           <ul className='service__list'>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>  HTML</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>CSS</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>JAVASCRIPT</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>BOOTSTRAP</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>WEB DESIGN</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>REACT.JS</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>EXPRESS.JS</p>
            </li>
            
           </ul>

        </article>
   {/* END OF WEBDEVELOPEMNT  */}


   <article className='service'>
          <div className='service__head'>
            <h3>Back-end Development </h3>
          </div>
           <ul className='service__list'>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p> JAVASCRIPT</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>COMPUTER NETWORK</p>
            </li>

            <li> 
              <BiCheck className='service__list-icon'/>
              <p>DATABASES</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>GIT/GITHUB</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>SQL/MYSQL</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>HTTP/HTTPS,ATHENTICATION</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
              <p>EPI/REST.API</p>
            </li>
            
           </ul>

        </article>
   {/* END OF BACKEND  */}
      </div>

    </section>
  )
}

export default Services
