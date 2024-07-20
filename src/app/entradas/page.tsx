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
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Elige tu Entrada</h1>
      <div className={styles.buttonsContainer}>
        {ticketsLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.button}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
}
