import Bienvenida from '../../Components/Bienvenida/Bienvenida'
import './home.css'
import Proyectos from '../Proyectos/Proyectos'
import Skills from '../Skills/Skills'

export default function Home() {
  return (
    <div className='container'>
        <Bienvenida/>
        <Proyectos/>
        <Skills/>
    </div>
  )
}
