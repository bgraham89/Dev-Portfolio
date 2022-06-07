import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['B', 'r', 'a', 'd', 'l', 'e', 'y', ' ', 'G', 'r', 'a', 'h', 'a', 'm']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [] )

    return (
        <div className='content home-page'>
            <div className='zone text-zone'>
                <h1>
                    Hi, I'm <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5}/>
                </h1>
                <h2>Content Developer / Ontology Expert / Tutor</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='zone color-zone'></div>
        </div>
    )
}

export default Home