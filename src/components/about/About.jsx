import React from 'react'
import ME from "../../assets/me-about.jpg"
import "./About.css"
import {FaAward} from "react-icons/fa"
import {MdHomeWork} from "react-icons/md"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

export default function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about Image'/>
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward />
              <h5>Experience</h5>
              <small>1-2 year software Engineer 10+ years IT Administrator</small>              
            </article>
          
            <article className='about__card'>
              <FiUsers />
              <h5>Clients</h5>
              <small>5+ worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
          I got the Software Engineering Certification from Springboard. I completed a 700+ hour online course covering front-end, back-end, and full stack web development 
          with JavaScript, Python, Flask, SQL, Node, Express, React, and Redux. I completed 4 fullstack capstone projects. 
          Also I worked with Github, and Heroku for deploying apps. In this course I was in contact with a large group of classmates to solve problems, work pair programming. 
          Also I have a bachelor degree in computer engineering, and I have more than 10 years experience as an IT administrator. 
          My responsibility was overseeing and maintaining all aspects of a computer infrastructure including maintaining networks, 
          servers and security programs and systems. Also I managed the upgrade and installation of new hardware and software, 
          and performed troubleshooting. 
          Now I have over a year of experience as a software engineer at Springboard, and I’m looking for a job as a full stack developer, front end developer, back end developer. I can speak 3 languages: English, Persian, Turkish.

          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
