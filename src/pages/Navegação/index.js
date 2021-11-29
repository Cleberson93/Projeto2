import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import './style.css';

const Navegation = () => {

    const history = useHistory();

    return (
        <nav className="navbar-container">
            <div className="nav-links">
                <Link to="/Mapa"> Mapa </Link>
                <Link to="/Empresas"> Empresas</Link>
                <Link to="/Produtos"> Produtos </Link>
                <Link to="/Estoque"> Estoque </Link>
            </div>
            
            <button className="button-sair" onClick={() => history.push("/")}> Sair </button>
            
        </nav>
    );
};

export default Navegation;