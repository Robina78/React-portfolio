import React, {useState} from 'react'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDetail} from "react-icons/bi"
import {CgWebsite} from "react-icons/cg"
import "./Nav.css"

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (    
    <nav>
      <a href='#'
        rel="noreferrer" 
        onClick={()=>setActiveNav('#')}
        className={activeNav === "#" ? "active" : ""}>
        <AiOutlineHome />
      </a>
      <a href='#about' 
        rel="noreferrer"
        onClick={()=>setActiveNav('#about')}
        className={activeNav === "#about" ? "active" : ""} >
        <AiOutlineUser />
      </a>
      <a href='#experience'
        rel="noreferrer" 
        onClick={()=>setActiveNav('#experience')} 
        className={activeNav === "#experience" ? "active" : ""}>
        <BiBook />
      </a>
      <a href='#services'
        rel="noreferrer" 
        onClick={()=>setActiveNav('#services')}
        className={activeNav === "#services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href='#portfolio'
        rel="noreferrer" 
        onClick={()=>setActiveNav('#portfolio')}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <CgWebsite />
      </a>
      <a href='#contact'
        rel="noreferrer" 
        onClick={()=>setActiveNav('#contact')}
        className={activeNav === "#contact" ? "active" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}
