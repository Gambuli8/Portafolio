import './App.css'
import Home from './Views/Home/Home'
import Proyectos from './Views/Proyectos/Proyectos'
import Navbar from './Components/Navbar/navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <div className='absolute top-0 z-[-2] min-h-svh bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
            <Navbar />
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='/proyectos'
                    element={<Proyectos />}
                />
            </Routes>
        </div>
    )
}

export default App
