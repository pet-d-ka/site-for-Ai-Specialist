import React from 'react';

interface NavLinkProps {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  className = "", 
  onClick, 
  children 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
    if (onClick) onClick();
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      className={`text-white hover:text-purple-400 transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default NavLink;