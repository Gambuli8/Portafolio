import Bienvenida from '../../Components/Bienvenida/Bienvenida'
import './home.css'
import Proyectos from '../Proyectos/Proyectos'
import Skills from '../Skills/Skills'
import Experiencia from '../../Components/Experiencia/Experiencia'

export default function Home() {
    return (
        <div className='min-h-screen pb-20'>
            <Bienvenida />
            <Experiencia />
            <Proyectos />
            <Skills />
        </div>
    )
}
