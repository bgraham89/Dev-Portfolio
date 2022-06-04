import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'B', 'r', 'a', 'd', 'l', 'e', 'y', ' ', 'G', 'r', 'a', 'h', 'a', 'm']

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={5}/>
                </h1>
                <h2>Content Developer / Ontology Expert / Teacher</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home