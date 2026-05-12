import { Link } from 'react-router-dom';
import Button from '../Button/Button';

// Navbar for the website.
const Navbar = function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>

                <li className='logo'>
                    <Link to='/'>
                    <img
                        src="../dist/assets/red-panda.jpg"
                        alt="Acting Globally Logo"
                        className="navbar-logo"
                    />
                    <h2>Acting Globally</h2>
                    </Link>
                </li>

                <li>
                    <Link to='/Vision'>Vision</Link>
                </li>

                <li>
                    <Link to='/Partners'>Partners</Link>
                </li>

                <li>
                    <Link to='/Impact'>Our Impact</Link>
                </li>

                <li>
                    <Link to='/Team'>Our Team</Link>
                </li>

                <li>
                    <Button text={'Volunteer'} path={'/Volunteer'} color={'#569ABC'}/>
                </li>

                <li>
                    <Button text={'Donate'} path={'/Donate'} color={'#1041B6'}/>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;