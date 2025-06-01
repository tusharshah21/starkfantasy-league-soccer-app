import { Link } from "react-router-dom";

export default function StickyNavbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#0E0E1A] border-b border-gray-800 px-4 py-3">
            <div className="relative flex flex-wrap items-center justify-between max-w-7xl mx-auto">
                {/* Logo + Title */}
                <div className="flex items-center gap-3 z-10">
                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                </div>

                {/* Centered Navigation Links */}
                <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 space-x-6 text-sm text-white font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tournaments">Tournaments</Link></li>
                    <li><Link to="/landing/rules" className="text-orange-500">Rules</Link></li>
                    <li className="mr-6"><Link to="/landing/support">Support</Link></li>
                </ul>

                {/* Auth Buttons */}
                <div className="flex space-x-2 z-10">
                    <button className="bg-orange-500 text-white px-3 py-1 rounded text-sm">Login</button>
                    <button className="bg-purple-700 text-white px-3 py-1 rounded text-sm">Register</button>
                </div>
            </div>

            {/* Mobile Menu (optional) */}
            <div className="flex flex-col lg:hidden mt-4 space-y-2 text-white text-sm">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/tournaments">Tournaments</Link>
                <Link to="/landing/rules" className="text-orange-500">Rules</Link>
                <Link to="/landing/support">Support</Link>
            </div>
        </nav>
    );
}
