import './Skills.css'
// import {HTML, GraphQL, JQuery, JavaScript, aws, bootstrap, cloudinary, css, express,firebase, framer,git,mySql, nodejs, postgreSQL,redux,tailwind,ReactJS,vite} from '../../Components/svgs/svgs'
import svgs from '../../Components/svgs/svgs'

export default function Skills() {
    return (
        <section
            id='Skills'
            className='flex flex-col items-start justify-start ml-24 mt-44'
        >
            <h1 className='text-[40px] text-[#ffda9e] mb-5 text-[Quicksand, sans-serif]'>Skills</h1>
            <div className='flex items-center justify-center w-full h-auto'>
                <div className='grid items-center justify-center grid-cols-3 gap-3'></div>
            </div>
        </section>
    )
}
