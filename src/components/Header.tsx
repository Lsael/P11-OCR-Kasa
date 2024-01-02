import { NavLink } from 'react-router-dom'
import logoHeader from '../assets/LOGO-header.svg'

const Header = () => {
    return(
        <header>
            <img src={logoHeader} alt="Logo Kasa" />
            <ul>
                <li><NavLink to='/accueil' className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
                <li><NavLink to='/a-propos' className={({ isActive }) => isActive ? 'active' : ''}>A propos</NavLink></li>
            </ul>
        </header>
    )
}

export default Header
