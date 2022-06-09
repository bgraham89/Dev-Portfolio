import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Blog = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['B', 'r', 'a', 'd', "'", 's', ' ', 'B', 'l', 'o', 'g']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [] )
    return (
        <div className='content blog-page'>
            <section className='navigation-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
            </section>
        </div>
    )
}

export default Blog