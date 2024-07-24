'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';
import Image from 'next/image';

const kitOptions = [
  { id: '1', name: 'Kit 1', image: '/images/kitOne.svg' },
  { id: '2', name: 'Kit 2', image: '/images/kitTwo.svg' },
  { id: '3', name: 'Kit 3', image: '/images/kitThree.svg' },
];

export default function XXL() {
  const [selectedKit, setSelectedKit] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleKitSelect = (kitName: string) => {
    setSelectedKit(kitName);
  };

  const handleProceed = () => {
    if (selectedKit) {
      setFormVisible(true);
    } else {
      alert('Por favor selecciona un kit');
    }
  };

  const handleFormSubmit = (formValues: any) => {
    console.log('Formulario enviado para XXL', {
      ...formValues,
      kit: selectedKit,
    });
    setFormVisible(false);
    setShowQRCode(true);
  };

  const handleDownloadQRCode = () => {
    const qrImageUrl = '/images/qr-code.png'; // Asegúrate de que esta imagen exista en public/images
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = 'qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste: {ticketsLinks[2].text}
        </Typography>
      </Box>
      {!formVisible && !showQRCode ? (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Elige un kit:
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              display="grid"
              gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              gap={2}
              mb={2}
            >
              {kitOptions.map((kit) => (
                selectedKit === kit.name ? (
                  <Card
                    key={kit.id}
                    sx={{
                      maxWidth: 345,
                      cursor: 'pointer',
                      border: '2px solid red',
                      transition: 'opacity 0.5s ease, border 0.3s ease',
                    }}
                    onClick={() => handleKitSelect(kit.name)}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={kit.image}
                      alt={kit.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {kit.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ) : selectedKit === null && (
                  <Card
                    key={kit.id}
                    sx={{
                      maxWidth: 345,
                      cursor: 'pointer',
                      transition: 'opacity 0.5s ease, border 0.3s ease',
                    }}
                    onClick={() => handleKitSelect(kit.name)}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={kit.image}
                      alt={kit.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {kit.name}
                      </Typography>
                    </CardContent>
                  </Card>
                )
              ))}
            </Box>
            {selectedKit && (
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleProceed}
                  sx={{ width: '100%', maxWidth: 200 }}
                >
                  Continuar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setSelectedKit(null)}
                  sx={{ mt: 2 }}
                >
                  Volver a seleccionar el kit
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      ) : formVisible ? (
        <Box>
          <RegistrationForm category="XXL" merch={selectedKit || ""} />
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" color="error" onClick={() => setFormVisible(false)}>
              Volver a escoger el kit
            </Button>
          </Box>
        </Box>
      ) : showQRCode ? (
        <Box textAlign="center">
          <Image src="/images/qr-code.png" alt="QR Code" width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
          <Button variant="contained" onClick={handleDownloadQRCode} sx={{ mt: 2 }}>
            Descargar QR
          </Button>
          <p>
            Envía el comprobante al número de WhatsApp:
            <Link href="https://wa.me/+5491158631851" target="_blank" rel="noopener noreferrer">
              +54 9 11 5863-1851
            </Link>
          </p>
        </Box>
      ) : null}

      {!formVisible && !showQRCode && !selectedKit && (
        <Box textAlign="center" mt={2}>
          <Link href="/entradas" passHref>
            <Button variant="outlined" color="error">
              Volver a la selección de entradas
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
