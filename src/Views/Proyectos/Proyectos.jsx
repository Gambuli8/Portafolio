/* eslint-disable no-unused-vars */
import './Proyectos.css'
// import { BadgePurpe, BadgeGreen } from '../../Components/Badge/Badge'

export default function Proyectos() {
    const proyectos = [
        {
            name: 'DEDALO Triatlón',
            image: '/src/assets/img/dedalo.png',
            description:
                'Dédalo Triatlón, la aplicación perfecta para los amantes del triatlón, te sumerge en el emocionante mundo de la competición, conectando a atletas de todo el mundo. Con un diseño intuitivo y funcional, Dédalo Triatlón te ofrece la posibilidad de iniciar sesión para personalizar tu experiencia y acceder a funciones exclusivas.',
            technology: ['JavaScript', 'ReactJs', 'HTML', 'TailwindCSS', 'AWS Amplify']
        },
        {
            name: 'BackOffice Alimecon',
            image: '/src/assets/img/Alimecon.png',
            description:
                'El backoffice de Alimecon brinda a los administradores un control total sobre los pedidos y el inventario. Desde la plataforma, los responsables pueden visualizar los pedidos de cada empleado de la empresa, accediendo a información sobre los platos solicitados. La herramienta permite configurar los horarios de realización de pedidos.',
            technology: ['JavaScript', 'ReactJs', 'HTML', 'TailwindCSS', 'GraphQL', 'AWS Amplify']
        },
        {
            name: 'CellXpress',
            image: '/src/assets/img/img-CellXpress.png',
            description:
                'Inicia sesión para acceder a tu cuenta personalizada, donde podrás explorar un catálogo diverso de teléfonos, desde los últimos modelos hasta opciones más asequibles. Filtra tus búsquedas según tus preferencias, como marca, modelo y estado del dispositivo.',
            technology: ['JavaScript', 'ReactJs', 'HTML', 'CSS', 'Redux', 'SQL']
        },
        { name: 'Weather App', image: '/src/assets/img/imgWeatherApp.png', description: 'fsdrgb', technology: ['JavaScript', 'ReactJs', 'HTML', 'CSS', 'Redux', 'SQL'] }
    ]
    return (
        <section
            id='proyectos'
            className='mt-32 mb-10 ml-24 '
        >
            <h2 className='text-[#ffda9e] text-[40px] mb-10'>Proyectos</h2>
            <div className='grid items-center justify-center grid-cols-2 ml-24'>
                {proyectos.map(proyecto => (
                    <div className='max-w-sm my-5 overflow-hidden border border-gray-300 rounded shadow-lg max-h-[550px]'>
                        <img
                            className='w-full'
                            src={proyecto.image}
                            alt='Sunset in the mountains'
                        />
                        <div className='px-6 py-4'>
                            <div className='mb-2 text-xl font-bold'>{proyecto.name}</div>
                            <p className='text-base text-gray-700'>{proyecto.description}.</p>
                        </div>
                        <div className='px-6 pt-3 pb-2 '>
                            {proyecto.technology.map(tech => (
                                // <span className='inline-block my-2 text-sm '>{BadgeGreen(`#${tech} `)}</span>
                                <span class=' inline-block my-2 bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400'>#{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
