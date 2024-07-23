'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';
import styles from './XXL.module.css';
export default function XXL() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); // Estado para mostrar el QR code
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = (formValues: any) => {
    console.log('Formulario enviado para XXL', formValues);
    // Aquí puedes manejar el envío del formulario
    setFormSubmitted(true);
    setShowQRCode(true); // Muestra el QR code después del envío
  };

  const handleDownloadQRCode = () => {
    // Crea un enlace para descargar la imagen QR
    const qrImageUrl = '/images/qr-code.png'; // Asegúrate de tener esta imagen en public/images
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = 'qr-code.png'; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isClient) {
    // Render simple content while the component is hydrating
    return <div>Cargando...</div>;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste: {ticketsLinks[2].text} {/* Cambia el índice si es necesario */}
        </Typography>
      </Box>
      {!formSubmitted ? (
        <RegistrationForm category='XXL' merch=''/>
      ) : showQRCode ? (
        <Box textAlign="center">
          <img src="/images/qrfake.svg" alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
          <Button variant="contained" onClick={handleDownloadQRCode} sx={{ mt: 2 }}>
            Descargar QR
          </Button>
          <p>Envía el comprobante al número de WhatsApp:
            <a href="https://wa.me/+5491158631851" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
              +54 9 11 5863-1851
            </a></p>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            ¡Gracias por registrarte!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tu información ha sido registrada correctamente. Pronto recibirás más información sobre el evento.
          </Typography>
        </Box>
      )}
      <Box textAlign="center" mt={2}>
        <Link href="/entradas" passHref>
          <Button variant="contained">
            Volver a la selección de entradas
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
