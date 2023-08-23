import { NavLink } from "react-router-dom";
import Logo from '../../assets/logo.png';
import '../../styles/Navbar.css'

function Header() {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="navbar_links">
                <NavLink to="/"> Accueil </NavLink>
                <NavLink to="/about"> A Propos </NavLink>
            </div>

        </nav>
    )
}

export default Header