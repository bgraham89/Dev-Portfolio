import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import {Blender, English, Mathematics, Python, Roblox} from '../Resources'

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
                <div className='courses flex-col'>
                    <div className='chalk-outline'>
                        <h2>Recommended Resources</h2>
                        <ul>
                            <li><a href='#blender' className='course-name'>3d-modelling with Blender</a></li> 
                            <li><a href='#english' className='course-name'>English language</a></li>
                            <li><a href='#roblox' className='course-name'>game development with Roblox Studios</a></li>
                            <li><a href='#mathematics' className='course-name'>Mathematics</a></li>
                            <li><a href='#python' className='course-name'>Programming with Python</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='blender links flex-col'>
                <h1 id='blender'>Blender</h1>
                <Blender/>
            </section>
            <section className='english links flex-col'>
                <h1 id='english'>English Language</h1>
                <English/>
            </section>
            <section className='mathematics links flex-col'>
                <h1 id='mathematics'>Mathematics</h1>
                <Mathematics/>
            </section>
            <section className='python links flex-col'>
                <h1 id='python'>Python</h1>
                <Python/>
            </section>
            <section className='roblox-studios links flex-col'>
                <h1 id='roblox'>Roblox Studios</h1>
                <Roblox/>
            </section>
        </div>
    )
}

export default Teaching