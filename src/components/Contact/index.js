import './index.scss';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const textArray = ['C', 'o', 'n', 't', 'a', 'c', 't']
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4500)
    }, [] )

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('Gmail', 'template_18pcghp', form.current, '4Vx_shNffiQCsQE3p')
            .then((result) => {
                console.log(result.text);
                alert('Message successfully sent!')
                window.location.reload(false)
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again')
        });
    }

    return (
        <div className='content contact-page'>
            <section className='form-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={textArray} idx={5}/>
                </h1>
                <form id='contact-form' ref={form} onSubmit={sendEmail}>
                    <ul className='display-structure'>
                        <li className='label name-entry'>
                            <p>Name</p>
                        </li>
                        <li className='functional name-entry'>
                            <input type='text' name='name' required/>
                        </li>
                        <li className='label email-entry'>
                            <p>Email Address</p>
                        </li>
                        <li className='functional email-entry'>
                            <input type='text' name='email' required/>
                        </li>
                        <li className='label subject-entry'>
                            <p>Subject</p>
                        </li>
                        <li className='functional subject-entry'>
                            <input type='text' name='subject' required/>
                        </li>
                        <li className='label message-entry'>
                            <p>Message</p>
                        </li>
                        <li className='functional message-entry'>
                            <textarea name="message" required/>
                        </li>
                        <li className='functional form-submit'>
                            <button type='submit' value='Send'>
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