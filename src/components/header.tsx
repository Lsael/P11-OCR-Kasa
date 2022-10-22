import mainLogo from '../assets/.LOGO.png'

const Header = () => {
    return(
        <header>
            <img src={mainLogo} alt="Logo Kasa" />
            <ul>
                <li><a href='/accueil'>Accueil</a></li>
                <li><a href='/a-propos'>A propos</a></li>
            </ul>
        </header>
    )
}

export default Header