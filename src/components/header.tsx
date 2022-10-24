import { NavLink } from 'react-router-dom'
import mainLogo from '../assets/.LOGO.png'

const Header = () => {
    return(
        <header>
            <img src={mainLogo} alt="Logo Kasa" />
            <ul>
                <li><NavLink to='/accueil'className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink></li>
                <li><NavLink to='/a-propos' className={({ isActive }) => isActive ? 'active' : ''}>A propos</NavLink></li>
            </ul>
        </header>
    )
}

export default Header