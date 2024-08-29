import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="nav fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white flex justify-center items-center p-4">
            <div className="flex space-x-4">
                <Link to="/" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    Home
                </Link>
                <Link to="/about" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    About
                </Link>
                <Link to="/services" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    Services
                </Link>
            </div>
        </nav>
    );
}