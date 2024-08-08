"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './tickets.module.css';
import { ticketsLinks } from '@/utils/ticketsLinks';

export default function Tickets() {
  const [category, setCategory] = useState<string>('');
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    // Redirige a la página de entradas específica
    router.push(`/entradas/${category}`);
  };
  const title = 'ASTROBOY XL LISTENING PARTY';
  const subtitle = 'CASA GRANDE / MOANA';
  const subtitle2 = '31 AGOSTO';
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <h4 className={styles.subtitle}>{subtitle}</h4>
          <h4 className={styles.subtitle2}>{subtitle2}</h4>
        </div>
        <h1 className={styles.title2}>SELECCIONA TU ENTRADA</h1>
        <div className={styles.buttonsContainer}>
          {ticketsLinks.map((link) => (
            <button
              key={link.category}
              className={styles.button}
              onClick={() => handleCategoryClick(link.category)}
            >
              {link.text}
            </button>
          ))}
        </div>
      </div></>
  );
}
