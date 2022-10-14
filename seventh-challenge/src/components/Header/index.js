import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/a">Página A</Link></li>
            <li><Link to="/b">Página B</Link></li>
        </nav>
    )
}

export default Header;