"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Cambiado a next/navigation
import styles from './tickets.module.css'; // Asegúrate de que la ruta sea correcta
import { ticketsLinks } from '@/utils/ticketsLinks'; // Asegúrate de la ruta correcta

export default function Tickets() {
  const [category, setCategory] = useState<string>('');
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    // Redirige a la página de entradas específica
    router.push(`/entradas/${category}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Elige tu Entrada</h1>
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
    </div>
  );
}
