/* eslint-disable no-unused-vars */
import './navbar.css'
import {motion} from 'framer-motion'

export default function navbar() {
  return (
    <header>
        <div className="containerBienvenida">
            <picture className="logo">
                <motion.h1 
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{
                   duration: 0.3,
                   ease: 'linear',
                   scale: {
                     type: "spring",
                     damping: 10,
                     stiffness: 100,
                   }
                 }}
                >Geronimo Gambuli</motion.h1>
            </picture>
            <ul className="ul">
                <li><a className="li" href="#">About</a></li>
                <li><a className="li" href="#proyectos" >Proyectos</a></li>
                <li><a className="li" href="#contacto" >Skills</a></li>
            </ul>
        </div>
    </header>
  )
}
