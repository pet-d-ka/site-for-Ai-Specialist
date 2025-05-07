import React, { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-semibold text-green-800">TeaWisdom</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#types">Tea Types</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button
            className="md:hidden text-green-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <NavLink href="#types" onClick={() => setIsMenuOpen(false)}>
                Tea Types
              </NavLink>
              <NavLink href="#benefits" onClick={() => setIsMenuOpen(false)}>
                Benefits
              </NavLink>
              <NavLink href="#products" onClick={() => setIsMenuOpen(false)}>
                Products
              </NavLink>
              <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      if (onClick) onClick();
    }}
    className="text-green-800 hover:text-green-600 transition-colors duration-300"
  >
    {children}
  </a>
);

export default Header;