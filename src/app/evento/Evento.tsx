// components/Event.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './Event.module.css';
import { btnsLinks } from '@/utils/btnsLinks'; // Asegúrate de la ruta correcta

export default function Event() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>ASTROBOY XL LISTENING PARTY</h1>
        <h4 className={styles.subtitle}>SECRET LOCATION</h4>
      </div>
      <div className={styles.buttonsContainer}>
        {btnsLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.button}>
            {link.text}
          </Link>
        ))}
      </div>
      <div className={styles.logo}>
        <Image src="/images/logoTrucho.svg" alt="Logo de Astroboy XL" width={100} height={100} />
      </div>
    </div>
  );
}
