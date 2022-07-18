import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <nav id='internal-links'>
                <NavLink exact='true' activeclassname='active' to='/' className='home-link'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='teaching-link' to='/teaching'>
                    <FontAwesomeIcon icon={faPersonChalkboard} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <nav id="external-links">
                <ul className='display-structure'>
                    <li className='Youtube-link'>
                        <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UCnAkHr0opNBtosPykdh0aSw'>
                            <FontAwesomeIcon className='youtube' icon={faYoutube} color='#4d4d4e'/>
                        </a>
                    </li>
                    <li className='Github-link'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/bgraham89'>
                            <FontAwesomeIcon className='github' icon={faGithub} color='#4d4d4e'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar