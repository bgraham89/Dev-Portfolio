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
            <section className='landing-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <p>5+ years teaching and tutoring experience.</p>
                <p>Rates starting from £20 per hour per group.</p>
                <div className='courses'>
                    <h2>Available Courses</h2>
                    <ul>
                        <li><span className='course-name'>Mathematics</span></li> 
                        <li><span className='course-name'>English language</span></li>
                        <li><span className='course-name'>3d-modelling with Blender</span></li>
                        <li><span className='course-name'>game development with Roblox Studios</span></li>
                        <li><span className='course-name'>Programming with Python</span></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Teaching