
import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__fronted'>
         <h3> Frontrnd Development</h3>
         <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ExpressJs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ReactJs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>


         </div>
        </div>
        <div className='experience__backend'>
          <h3>Back-end Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Nodejs</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL/MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Php</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>C++/Oops/DSA</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Database</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>


         </div>

        </div>

      </div>
      </section>
  )
}

export default Experience
