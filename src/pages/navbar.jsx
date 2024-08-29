export default function Navbar() {
    return (
        <nav className="nav fixed top-0 left-0 right-0 z-50 bg-gray-800 text-white flex justify-center items-center p-4">
            <div className="flex space-x-4">
                <a href="/" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    Home
                </a>
                <a href="/about" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    About
                </a>
                <a href="/services" className="nav-link text-white hover:bg-gray-700 px-3 py-2 rounded">
                    Services
                </a>
            </div>
        </nav>
    );
}