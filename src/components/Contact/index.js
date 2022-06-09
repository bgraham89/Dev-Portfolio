import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [] )
    return (
        <div className='content contact-page'>
            <section className='form-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <form id='contact-form'>
                    <ul className='display-structure'>
                        <li className='label name-entry'>
                            <p>Name...</p>
                        </li>
                        <li className='functional name-entry'>
                            <input type='text' name='name' required/>
                        </li>
                        <li className='label email-entry'>
                            <p>Email Address...</p>
                        </li>
                        <li className='functional email-entry'>
                            <input type='text' name='email' required/>
                        </li>
                        <li className='label subject-entry'>
                            <p>Subject...</p>
                        </li>
                        <li className='functional subject-entry'>
                            <input type='text' name='subject' required/>
                        </li>
                        <li className='label message-entry'>
                            <p>Message...</p>
                        </li>
                        <li className='functional message-entry'>
                            <textarea name="message" required/>
                        </li>
                        <li className='functional form-submit'>
                            <button type='submit' value='SEND'>
                                <FontAwesomeIcon icon={faEnvelope} className='color'/>
                            </button>
                        </li>
                    </ul>
                </form>
            </section>
        </div>
    )
}

export default Contact