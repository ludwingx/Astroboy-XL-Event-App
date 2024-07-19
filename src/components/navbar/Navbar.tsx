"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={`hidden md:flex ${styles.linksContainer}`}>
          <Link href="/" className={styles.link}>EVENTO</Link>
          <Link href="/about" className={styles.link}>ENTRADAS</Link>
          <Link href="/services" className={styles.link}>MERCH</Link>
          <Link href="/contact" className={styles.link}>CONTRIBUIDORES</Link>
        </div>
        <div className="md:hidden flex justify-between w-full">
          <div className="text-black text-2xl font-bold">
            <Link href="/">Astroboy XL</Link>
          </div>
          <button onClick={toggleMenu} className={styles.menuButton}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/" className={styles.mobileLink}>EVENTO</Link>
          <Link href="/about" className={styles.mobileLink}>ENTRADAS</Link>
          <Link href="/services" className={styles.mobileLink}>MERCH</Link>
          <Link href="/contact" className={styles.mobileLink}>CONTRIBUIDORES</Link>
        </div>
      )}
    </nav>
  );
}
