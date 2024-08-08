"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./tickets.module.css";
import { ticketsLinks } from "@/utils/ticketsLinks";
import { Box, Button} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function Tickets() {
  const [category, setCategory] = useState<string>("");
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setCategory(category);
    // Redirige a la página de entradas específica
    router.push(`/entradas/${category}`);
  };
  const title = "ASTROBOY XL LISTENING PARTY";
  const subtitle = "CASA GRANDE / MOANA";
  const subtitle2 = "31 AGOSTO";
  return (
    <>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>

          <h4 className={styles.subtitle}><LocationOnIcon sx={{ color: 'red', marginBottom: '0.5rem'}}  /> {subtitle}</h4>


          <h4 className={styles.subtitle2}><CalendarMonthIcon sx={{ marginBottom: '0.5rem'}}/> {subtitle2}</h4>
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
        <div className={styles.textContainer}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <h2 className={styles.title3}>
              Si ya estas registrado, inicia sesion para ver tu entrada
            </h2>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" className={styles.button2}>
              Iniciar Sesion
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
}
