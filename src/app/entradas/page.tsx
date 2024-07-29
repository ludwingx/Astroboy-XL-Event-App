"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './tickets.module.css';
import { ticketsLinks } from '@/utils/ticketsLinks';

export default function Tickets() {
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});
  const router = useRouter();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch('/api/countL');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategoryCounts((prev) => ({ ...prev, L: data.count }));
      } catch (error) {
        console.error('Error fetching category counts:', error);
      }
    };

    fetchCounts();
  }, []);

  const handleCategoryClick = (category: string) => {
    if (category === 'L' && categoryCounts.L >= 100) {
      alert('El registro para la categoría L ha alcanzado el límite.');
      return;
    }
    router.push(`/entradas/${category}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SELECCIONA TU ENTRADA</h1>
      <div className={styles.buttonsContainer}>
        {ticketsLinks.map((link) => (
          <button
            key={link.category}
            className={styles.button}
            onClick={() => handleCategoryClick(link.category)}
            disabled={link.category === 'L' && categoryCounts.L >= 30}
          >
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
}
