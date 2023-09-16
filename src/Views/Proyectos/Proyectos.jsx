/* eslint-disable no-unused-vars */
import './Proyectos.css'

export default function Proyectos() {
  return (
    <section id="proyectos">
        <h1 className="h1">Proyectos</h1>
        <div className="containerProyectos">
            <div className="proyecto">
                <article className="proyect">
                    <img className="imgProyects" src="../../img/img-CellXpress.png" alt=""/>
                    <p className="p"><b>CelXpress</b></p>
                </article>
                <article className="proyect">
                    <img className="imgProyects" src="../../img/imgFitConnect.png" alt=""/>
                    <p className="p"><b>FitConnect</b></p>
                </article>
                <article className="proyect">
                    <img className="imgProyects" src="../../img/imgDrivers.png" alt=""/>
                    <p className="p"><b>Drivers</b></p>
                </article>
                <article className="proyect">
                    <img className="imgProyects" src="../../img/imgCalculator.png" alt=""/>
                    <p className="p"><b>Calulator clon iOS</b></p>
                </article>
            </div>
        </div>
</section>
  )
}
