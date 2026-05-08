import { Link } from 'react-router-dom';

// Navbar for the website.
const Navbar = function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>Acting Globally</div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
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
                    <Link to='/Volunteer'>Volunteer</Link>
                </li>
                <li>
                    <Link to='/Donate'>Donate</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;