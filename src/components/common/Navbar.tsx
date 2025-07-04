import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Link, NavLink } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/books", label: "All Books" },
    { to: "/create-book", label: "Add Book" },
    { to: "/borrow-summary", label: "Borrow Summary" },
  ];

  const activeClass =
    "font-bold border-2 px-3 py-1 rounded border-blue-500 bg-blue-500 text-white";
  const defaultClass =
    "font-semibold border-2 px-3 py-1 rounded text-blue-500 border-blue-500";
  return (
    <div className="border-b-2 p-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl md:text-3xl uppercase">
          Library <span className="text-blue-500">System</span>
        </Link>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center md:gap-5 absolute md:static left-0 top-[70px] w-full md:w-auto bg-white md:bg-transparent z-50 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClass : defaultClass
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
