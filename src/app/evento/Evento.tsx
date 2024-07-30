import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import styles from './Event.module.css';
import { btnsLinks } from '@/utils/btnsLinks'; // Ensure the path is correct

const title = 'ASTROBOY XL LISTENING PARTY';
const subtitle = '- SECRET LOCATION -';

export default function Event() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.subtitle}>{subtitle}</h4>
      </div>

      <div className={styles.buttonsContainer}>
        {btnsLinks.map((link) => (
          <Link key={link.href} href={link.href} className={styles.button}>
            {link.text}
          </Link>
        ))}
      </div>

      <Box className={styles.logo}>
        <Image
          src="/images/logoTrucho.svg"
          alt="Logo de Astroboy XL"
          width={30}
          height={30}
          className={styles.image}
          priority
        />
      </Box>
    </div>
  );
}
