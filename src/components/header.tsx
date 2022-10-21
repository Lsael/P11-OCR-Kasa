import mainLogo from '../assets/.LOGO.png'

const Header = () => {
    return(
        <header>
            <img src={mainLogo} alt="Logo Kasa" />
            <ul>
                <li>Accueil</li>
                <li>A propos</li>
            </ul>
        </header>
    )
}

export default Header