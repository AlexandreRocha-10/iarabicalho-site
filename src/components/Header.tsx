import logoiarabranco from '../assets/logoiarabranco.png';
import Sidenav from './Sidenav';

function Header() {
    return (
        <div className="relative">
            <img src={logoiarabranco} alt="Logo" className="absolute top-1 left-1 w-40 max-w-250 z-10" />
            <Sidenav />
        </div>
    );
}

export default Header;
