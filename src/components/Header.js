import logoPath from '../images/logo.svg';

function Header() {
    return (
        <header className="header root__section">
            <img src={logoPath} alt="mesto logo" className="logo" />
        </header>
    );
}

export default Header; 