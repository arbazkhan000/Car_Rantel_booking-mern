import { Car, CircleUser, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#F1F5F9] flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div className="flex items-center font-bold text-2xl gap-2">
                <Car size={32} />
                CarRantel
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 items-center font-medium text-base transition-all">
                <li>
                    <a
                        href="/"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="/cars"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Cars
                    </a>
                </li>
            </ul>

            {/* Right Side */}
            <div className="relative flex items-center space-x-3">
                {token ? (
                    <div className="relative">
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            className="focus:outline-none"
                        >
                            <CircleUser size={30} />
                        </button>

                        {/* User Dropdown */}
                        {userMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    // onClick={() => setUserMenuOpen(false)}
                                >
                                    My Bookings
                                </a>
                                <button
                                    // onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/register")}
                        className="rounded-md py-2 px-4 border border-[#1e293b] bg-[#1e293b] text-white hover:bg-transparent hover:text-black"
                    >
                        Sign Up
                    </button>
                )}

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="block md:hidden"
                    aria-label="Toggle menu"
                >
                    <Menu size={32} />
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="flex flex-col gap-4 absolute top-20 right-8 bg-white shadow-lg rounded-lg p-6 z-30 md:hidden">
                    <li>
                        <a href="" onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/cars" onClick={() => setMenuOpen(false)}>
                            Cars
                        </a>
                    </li>
                    <li>
                        <a href="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};
