'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, BookOpen, Layers, GraduationCap, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <Link href="/" className="navbar-brand" onClick={closeMenu}>
        <div className="logo-icon"><GraduationCap size={20} /></div>
        <span>ויזואליזציה של מידע</span>
      </Link>

      {/* Hamburger icon for mobile */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Navigation links */}
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link 
            href="/exams" 
            className={pathname.startsWith('/exams') ? 'active' : ''}
            onClick={closeMenu}
          >
            <BookOpen size={16} /> מבחנים
          </Link>
        </li>
        <li>
          <Link 
            href="/cheatsheet" 
            className={pathname === '/cheatsheet' ? 'active' : ''}
            onClick={closeMenu}
          >
            <BarChart3 size={16} /> גיליון עזר
          </Link>
        </li>
        <li>
          <Link 
            href="/terms" 
            className={pathname === '/terms' ? 'active' : ''}
            onClick={closeMenu}
          >
            <Layers size={16} /> מושגים
          </Link>
        </li>
      </ul>
    </nav>
  );
}
