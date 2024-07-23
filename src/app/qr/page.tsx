// src/app/complete/page.tsx

"use client";

import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import { Container, Typography, Box, Button, Link } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const CompletedPage: FC = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category') || 'unknown'; // Proporciona un valor por defecto
  const merch = searchParams.get('merch') || 'default'; // Proporciona un valor por defecto

  let qrImage: string = '';
  let price: string = '';

  switch (category) {
    case 'L':
      return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>¡Registro Completado!</Typography>
          <Typography variant="body1">Has seleccionado la categoría L. Tu entrada es gratuita.</Typography>
        </Container>
      );
    case 'XL':
      qrImage = '/images/qrfake.svg'; // Verifica que esta imagen esté en el directorio `public`
      price = '90 Bs';
      break;
    case 'XXL':
      qrImage = '/images/qrfake.svg'; // Verifica que esta imagen esté en el directorio `public`
      price = '180 Bs';
      break;
    default:
      return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="h4" gutterBottom>¡Registro Completado!</Typography>
          <Typography variant="body1">Opción desconocida.</Typography>
        </Container>
      );
  }

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom>¡Registro Completado!</Typography>
      <Typography variant="body1">Tu formulario ha sido enviado exitosamente.</Typography>
      <Box mt={2}>
        <Image src={qrImage} alt="QR Code" width={150} height={150} /> {/* Define width y height */}
      </Box>
      <Typography variant="h6" mt={2}>Precio: {price}</Typography>
      <Typography variant="body1" mt={2}>
        El comprobante de pago debe ser enviado al número de WhatsApp:
        <Link
          href="https://wa.me/+5491158631851"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'red' }}
        >
          +54 9 11 5863-1851
        </Link>
        para confirmar la compra.
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="error"
          href="https://wa.me/+5491158631851"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon sx={{ mr: 1 }} /> Enviar a WhatsApp
        </Button>
      </Box>
    </Container>
  );
};

export default CompletedPage;
