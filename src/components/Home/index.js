import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['B', 'r', 'a', 'd', 'l', 'e', 'y', ' ', 'G', 'r', 'a', 'h', 'a', 'm']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [] )

    return (
        <div className='content home-page'>
            <section className='landing-zone'>
                <h1>
                    Hi, I'm <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <h2>Personal Tutor / Teacher / Mentor</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </section>
        </div>
    )
}

export default Home