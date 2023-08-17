import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <Link>Accueil</Link>
            <Link>A Propos</Link>
        </nav>
    )
}

export default Header