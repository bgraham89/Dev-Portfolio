import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='Logo' />
                <img className='sub-logo' src={LogoSubtitle} alt='Sub-logo' />
            </Link> 
            <nav id='internal-links'>
                <NavLink exact='true' activeclassname='active' to='/' className='home-link'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='services-link' to='/services'>
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
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar