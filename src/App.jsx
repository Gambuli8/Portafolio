import './App.css'
import Home from './Views/Home/Home'
import Proyectos from './Views/Proyectos/Proyectos';
import Navbar from './Components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
      </Routes>
    </div>
  )
}

export default App
