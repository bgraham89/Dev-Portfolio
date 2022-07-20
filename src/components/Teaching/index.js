import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Teaching = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['T', 'e', 'a', 'c', 'h', 'i', 'n', 'g']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover-2')
        }, 3500)
    }, [] )
    return (
        <div className='content teaching-page'>
            <section className='landing-zone flex-col'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <p>5+ years teaching and tutoring experience.</p>
                <p>Rates starting from £30 per hour per group.</p>
                <div className='courses flex-col'>
                    <div className='chalk-outline'>
                        <h2>Available Courses</h2>
                        <ul>
                            <li><a href='#mathematics' className='course-name'>Mathematics</a></li> 
                            <li><a href='#english' className='course-name'>English language</a></li>
                            <li><a href='#3d' className='course-name'>3d-modelling with Blender</a></li>
                            <li><a href='#gamedev' className='course-name'>game development with Roblox Studios</a></li>
                            <li><a href='#programming' className='course-name'>Programming with Python</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='mathematics-services flex-col'>
                <h1 id='mathematics'>Mathematics</h1>
            </section>
            <section className='english-services flex-col'>
                <h1 id='english'>English Language</h1>
            </section>
            <section className='modelling-services flex-col'>
                <h1 id='3d'>3d Modelling</h1>
            </section>
            <section className='gamedev-services flex-col'>
                <h1 id='gamedev'>Game Development</h1>
            </section>
            <section className='programming-services flex-col'>
                <h1 id='programming'>Programming</h1>
            </section>
        </div>
    )
}

export default Teaching