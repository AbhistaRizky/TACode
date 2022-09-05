import React, { useState, useEffect } from 'react'; //useState di panggil dalam function component untuk menambahkan suatu state lokal. React akan menyimpan state antar render. useState memberikan dua hal: nilai state saat ini dan fungsi untuk memperbarui nilai tersebut
import { Link } from 'react-router-dom'; //install react router dom dl pake npm install react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //manggil asset dalam fontawesome yang udah di install di terminal
import { faCubes, faBars } from "@fortawesome/free-solid-svg-icons";
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <>
            {/* ^^ fragment */}
            <nav className="navbar" >
                <div className="navbar-container">

                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        {/* untuk buat logo nya bisa di klik dan yang close biar pas menu di click dia ketutup otomatis*/}
                        DocsPal <FontAwesomeIcon icon={faCubes} />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa-bars' : 'fa-window-minimize'}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </i>
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        {/* <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                {/* <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> */}
                        {/* Home
                            </Link>
                        </li> */}

                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                {/* <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon> */}
                                About
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => openInNewTab('https://github.com/')}>
                                {/* <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> */}
                                Github
                            </Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    );
}

export default Navbar;