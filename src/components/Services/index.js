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
            </section>
        </div>
    )
}

export default Services