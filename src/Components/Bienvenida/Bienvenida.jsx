import './style.css';
import Toastify from 'toastify-js'
import { motion } from 'framer-motion'

function SobreMi() {


  const copiar = () => {
    // navigator.clipboard.writeText(input.value);
    Toastify( {
      text: "Mail copiado correctamente!",
      duration: 2000,
      gravity: "top", // `top` or `bottom`
      style: {
        background: "#646cff",
        font_family: "Raleway",
      },
    }).showToast();
  }
  return (
    <section>

    <div id="home" className="bienvenida">
        <div className="inicio">
        <motion.p className="about"
         ><span className="hola">¡Hola!</span>
            Soy Geronimo Gambuli
            <motion.span
             className="pa"
            initial={{x: -400}}
            animate={{x: 0}}
            transition={{type:'spring', stiffness: 100, duration: 1}}
            layout
             >Full Stack Developer</motion.span>
        </motion.p>
        {/* <img className="icon-code" src="../../img/code-box-svgrepo-com.png" width="300" height="300" alt=""/> */}
        <div className="containerSobremi">
            <h2 className="title-Sobremi">Sobre Mi</h2>
            <div className="parrafoSobremi">
                <p> Soy un desarrollador full stack apasionado por crear soluciones web. Con experiencia en tecnologías front-end y back-end, me encanta convertir ideas en código funcional. Si buscas un colaborador apasionado para tu proyecto, ¡estoy listo para ayudar! <span className='spanContact'>Contactame!</span>.
                </p>
            </div>
        </div>
        <div className="redes">
            <motion.a initial={{scale: 0}} animate={{scale: 1}} transition={{ease: 'easeInOut', delay: 1}}  className="in" target="_blank" href="https://www.linkedin.com/in/gero-gambuli-613a53204/"  rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></motion.a>
            <motion.a initial={{scale: 0}} animate={{scale: 1}} transition={{ease: 'easeInOut', delay: 1.2}} className="git" target="_blank" href="https://github.com/Gambuli8" rel="noreferrer"><i className="fa-brands fa-github"></i></motion.a>
            <input type="hidden" className="input" value="geronimogambuli8@gmail.com"/>
            <motion.a initial={{scale: 0}} animate={{scale: 1}} transition={{ease: 'easeInOut', delay: 1.4}} className="mail" title="Copiar mail" onClick={() => copiar()}><i className="fa-regular fa-envelope"></i></motion.a>
            <motion.a initial={{scale: 0}} animate={{scale: 1}} transition={{ease: 'easeInOut', delay: 1.6}} className="tw" target="_blank" href="https://twitter.com/GambuliGero8" rel="noreferrer"><i className="fa-brands fa-twitter"></i></motion.a>
        </div>
        <motion.div className="containerCV" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
            <a title="Descargar" download="Geronimo Gambuli CV" className="cv" href="../../cv/GeronimoGambuliCV.pdf">Descargar CV <i className="fa-solid fa-download"></i></a>
        </motion.div>
    </div>
    <picture className="div-img">
        <img src="../../img/imgPersonal.png" className='image' alt="" />

    </picture>
</div>
</section>
  )
}

export default SobreMi