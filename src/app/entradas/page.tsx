// pages/tickets.tsx
import Link from 'next/link';
import styles from './tickets.module.css'; // Asegúrate de que la ruta sea correcta
import { ticketsLinks } from '@/utils/ticketsLinks'; // Asegúrate de la ruta correcta
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Entradas",
  description: "Aqui se encuentran las entradas en venta del evento",
};
export default function Tickets() {
  function handleClick(category: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Elige tu Entrada</h1>
      <div className={styles.buttonsContainer}>
        {ticketsLinks.map((link) => (
          <button key={link.href} onClick={() => handleClick(link.category)} className={styles.button}>
            {link.text}
          </button>
        ))}
      </div>
    </div>
  );
}
