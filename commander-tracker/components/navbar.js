import Link from 'next/link'
import { useRef } from 'react';


const Navbar = () => {

    const navElement = useRef(null);

    const eventListener = ( event ) => {
        
        event.currentTarget.classList.toggle( 'pressed' );
        navElement.current.classList.toggle( 'visible' );

    }

    return (
        <nav className="navigation">
            <div className="logo">
                M
            </div>
            <div className="hamburger-icon" onClick={ eventListener }>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className="nav-pages" ref={navElement}>
                <li>Players</li>
                <li>Decks</li>
                <li>Games</li>
            </ul>
        </nav>
    );
}



export default Navbar;