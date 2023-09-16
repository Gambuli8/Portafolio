import Bienvenida from '../../Components/Bienvenida/Bienvenida'
import './home.css'
import Proyectos from '../Proyectos/Proyectos'

export default function Home() {
  return (
    <div className='container'>
        <Bienvenida/>
        <Proyectos/>
    </div>
  )
}
