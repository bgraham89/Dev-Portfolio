import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Services = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['M', 'y', ' ', 'S', 'e', 'r', 'v', 'i', 'c', 'e', 's']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [] )
    return (
        <div className='content services-page'>
            <section className='navigation-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <div className='teaching-service'>
                    <h2>Teaching:</h2>
                    <ul>
                        <li>5+ years teaching experience</li>
                        <li>Rates at £20 per hour</li>
                        <li>Available Courses:</li>
                        <ul>
                            <li>mathematics</li> 
                            <li>English language</li>
                            <li>3d-modelling with <a href="https://www.blender.org/">Blender</a></li>
                            <li>game development with <a href="https://www.roblox.com/create">Roblox Studios</a></li>
                            <li>programming with <a href="https://www.python.org/">Python</a></li>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Services