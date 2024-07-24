"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Asegúrate de importar el archivo CSS correctamente

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menú de navegación para pantallas grandes */}
        <div className="hidden md:flex space-x-8 justify-center w-full">
          <Link style={{ textDecoration: 'none' }} href="/" className={styles.navLink}>EVENTO</Link>
          <Link href="/entradas" className={styles.navLink}>ENTRADAS</Link>
          <Link href="/merch" className={styles.navLink}>MERCH</Link>
          <Link href="/social" className={styles.navLink}>CONTRIBUIDORES</Link>
        </div>

        {/* Menú de navegación para pantallas móviles */}
        <div className="md:hidden flex justify-between w-full">
          <div className="text-black text-2xl font-bold">
            <Link href="/" className={styles.navLogo}>Astroboy XL</Link>
          </div>
          <button onClick={toggleMenu} className="text-black focus:outline-none transition-transform duration-300 transform hover:scale-110">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable en pantallas móviles */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 text-center bg-white shadow-lg transition-transform duration-300 transform translate-y-0 ease-in-out">
          <Link href="/" className={`${styles.navLink} block`}>EVENTO</Link>
          <Link href="/entradas" className={`${styles.navLink} block`}>ENTRADAS</Link>
          <Link href="/merch" className={`${styles.navLink} block`}>MERCH</Link>
          <Link href="/social" className={`${styles.navLink} block`}>CONTRIBUIDORES</Link>
        </div>
      )}
    </nav>
  );
}
