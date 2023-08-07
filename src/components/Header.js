/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [showMenuResponsive, setShowMenuResponsive] = useState(false)
  const hamburguerClickHandler = () => setShowMenuResponsive(prevState => !prevState)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        <Link className="navbar-brand" to="/">React Wiki</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={hamburguerClickHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showMenuResponsive? 'show':''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React Hooks
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                 <Link className="dropdown-item" to="/hooks/use-effect">useEffect</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hooks/use-memo-use-callback">useMemo y useCallback</Link>
                </li>
                <li>
                 <Link className="dropdown-item" to="/hooks/use-reducer">useReducer</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Librerías
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown-item active">
                  Redux
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/basico">Redux básico</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/toolkit">Redux toolkit</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li className="dropdown-item active">
                  Router Dom
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/dynamic-links">Rutas dinámicas</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/simple-links">Enlaces simples</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Otros
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/otros/apis">APIs</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/context">Contextos</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/module-css">ModuleCSS</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/lazy-component">Lazy Component</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
