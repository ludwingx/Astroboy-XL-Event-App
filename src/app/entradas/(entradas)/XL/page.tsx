'use client';
// pages/XL.tsx
import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';
import { FaWhatsapp } from "react-icons/fa";
import styles from './XL.module.css';

const merchOptions = [
  { id: '1', name: 'Polera Blanca', image: '/images/poleraBlancaXL.svg' },
  { id: '2', name: 'Polera Negra', image: '/images/poleraNegraXL.svg' },
  { id: '3', name: 'Polera XL', image: '/images/poleraXL.svg' },
  { id: '4', name: 'Gorra XL', image: '/images/gorraXL.svg' },
  { id: '5', name: 'Vaso XL', image: '/images/vasoXL.svg' },
];

export default function XL() {
  const [selectedMerch, setSelectedMerch] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMerchSelect = (merchId: string) => {
    setSelectedMerch(merchId);
  };

  const handleProceed = () => {
    if (selectedMerch) {
      setFormVisible(true);
    } else {
      alert('Por favor selecciona una opción de merch');
    }
  };

  const handleFormSubmit = (formValues: any) => {
    console.log('Formulario enviado para XL', { ...formValues, merch: selectedMerch });
    setFormVisible(false);
    setShowQRCode(true);
  };

  const handleDownloadQRCode = () => {
    const qrImageUrl = '/images/qr-code.png';
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToSelection = () => {
    setFormVisible(false);
    setShowQRCode(false);
    setSelectedMerch(null);
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste: {ticketsLinks[1].text}
        </Typography>
      </Box>

      {!formVisible && !showQRCode ? (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Elige una opción de merch:
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box display="grid" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={2} mb={2}>
              {merchOptions.map((merch) => (
                <Card
                  key={merch.id}
                  sx={{
                    maxWidth: 345,
                    cursor: 'pointer',
                    border: selectedMerch === merch.id ? '2px solid #1976d2' : 'none',
                    opacity: selectedMerch && selectedMerch !== merch.id ? 0.6 : 1,
                    transition: 'opacity 0.5s ease, border 0.3s ease',
                    display: selectedMerch === null || selectedMerch === merch.id ? 'block' : 'none',
                  }}
                  onClick={() => handleMerchSelect(merch.id)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={merch.image}
                    alt={merch.name}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {merch.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box textAlign="center" mt={2}>
              <Button
                variant="contained"
                onClick={handleProceed}
                sx={{ width: '100%', maxWidth: 200 }}
              >
                Continuar
              </Button>
            </Box>
            {selectedMerch && (
              <Box textAlign="center" mt={2}>
                <Button
                  variant="outlined"
                  onClick={() => setSelectedMerch(null)}
                >
                  Volver a seleccionar la merch
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      ) : formVisible ? (
        <Box>
          <RegistrationForm selectedOption={selectedMerch} />
          <Box textAlign="center" mt={2}>
            <Button
              variant="outlined"
              onClick={handleBackToSelection}
            >
              Volver a escoger la merch
            </Button>
          </Box>
        </Box>
      ) : showQRCode ? (
        <Box textAlign="center">
          <img src="/images/qrfake.svg" alt="QR Code" style={{ maxWidth: '100%', height: 'auto' }} />
          <Button variant="contained" onClick={handleDownloadQRCode} sx={{ mt: 2 }} >
            Descargar QR
          </Button>
          <p>Envía el comprobante al número de WhatsApp:
            <a href="https://wa.me/+5491158631851" className={styles.whatsappLink} target="_blank" rel="noopener noreferrer">
            +54 9 11 5863-1851
          </a></p>
        </Box>
      ) : null}

      {!formVisible && !showQRCode && (
        <Box textAlign="center" mt={2}>
          <Link href="/entradas" passHref>
            <Button variant="contained">
              Volver a la selección de entradas
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
