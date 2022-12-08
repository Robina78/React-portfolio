import React from 'react'
import "./Portfolio.css"
import { myPortfolio } from '../../data'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>
    
      <div className="container portfolio__container">
      {myPortfolio.map(project => (
        <article key={project.id} className="portfolio__item">
          <div  className="portfolio__item-image">
            <img src={project.image} alt="" />
          </div>
          <h3>{project.name}</h3>
          <h5>{project.tech}</h5>
          <div className="portfoli__item-cta">
          <a href={project.code} className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href={project.demo} 
            className='btn btn-primary' 
            target="_blank" rel="noreferrer">Live Demo
          </a>
          </div>
          
        </article>
        ))}
      </div>
    </section>
  )
}
