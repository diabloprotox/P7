import '../../styles/Error.css';
import { Link } from 'react-router-dom';


function PageNotFound() {
    return (
        <div className="errornotfound">
            <div className="errornotfound_main">
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas.</h2>
            </div>
            <Link to='/'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default PageNotFound