// src/components/Footer.tsx
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { FaSoundcloud, FaSpotify } from 'react-icons/fa'; // Importa íconos de react-icons

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper", // Usa un valor estático
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">

        <Typography variant="body2" color="textSecondary">
          {"Desarrollado por: "}
          <a href="https://portfoliobyludwing.netlify.app/" style={{ color: 'red', textDecoration: 'underline' }}>Ludwing</a>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {"© "}
          {new Date().getFullYear()}
          {" Astroboy XL. Todos los derechos reservados."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
