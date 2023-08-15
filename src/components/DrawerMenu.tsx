import { useState } from 'react';
import { MdMenu } from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCalendarAlt, faImage, faNewspaper, faCompactDisc, faEnvelope, faUsers, faStore } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function DrawerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [iconVisible, setIconVisible] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setIconVisible(false);
    };

    return (
        <div className={`drawer-menu ${menuOpen ? 'open' : ''}`}>
            {iconVisible && (
                <MdMenu className="menu-icon" onClick={toggleMenu} />
            )}
            {menuOpen && (
                <nav>
                    <ul>
                        <li><FontAwesomeIcon icon={faHome} /><NavLink to="/">Início</NavLink></li>
                        <li><FontAwesomeIcon icon={faInfoCircle} /><NavLink to="/about">Sobre</NavLink></li>
                        <li><FontAwesomeIcon icon={faCalendarAlt} /><NavLink to="/schedule">Agenda</NavLink></li>
                        <li><FontAwesomeIcon icon={faImage} /><NavLink to="/about">Fotos</NavLink></li>
                        <li><FontAwesomeIcon icon={faNewspaper} /><NavLink to="/about">Notícias</NavLink></li>
                        <li><FontAwesomeIcon icon={faCompactDisc} /><NavLink to="/about">Discografia</NavLink></li>
                        <li><FontAwesomeIcon icon={faEnvelope} /><NavLink to="/about">Contato</NavLink></li>
                        <li><FontAwesomeIcon icon={faUsers} /><NavLink to="/about">Central de Fãs</NavLink></li>
                        <li><FontAwesomeIcon icon={faStore} /><NavLink to="/about">Loja</NavLink></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default DrawerMenu;
