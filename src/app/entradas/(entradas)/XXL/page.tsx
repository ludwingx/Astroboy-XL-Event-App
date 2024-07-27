'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './XXL.module.css'; // Usar los estilos de XL

// Opciones de kit
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
    const qrImageUrl = '/images/180.jpeg'; // Asegúrate de que esta imagen exista en public/images
    const link = document.createElement('a');
    link.href = qrImageUrl;
    link.download = '180.jpeg'; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  const selectedCategory = 'XXL';

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem', marginBottom: '3rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste: {ticketsLinks.find((link) => link.category === selectedCategory)?.text || 'Ninguna categoría seleccionada'}
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
              gridTemplateColumns={{
                xs: 'repeat(auto-fit, minmax(200px, 1fr))', // Para pantallas pequeñas
                sm: 'repeat(auto-fit, minmax(200px, 1fr))', // Para pantallas medianas
                md: selectedKit ? '1fr' : 'repeat(3, 1fr)', // Para pantallas grandes
              }}
              justifyContent="center"
              alignItems="center"
              gap={2}
              mb={2}
            >
              {kitOptions.map((kit) => (
                <Card
                  key={kit.id}
                  sx={{
                    maxWidth: 345,
                    cursor: 'pointer',
                    border: selectedKit === kit.name ? '2px solid red' : 'none',
                    opacity: selectedKit && selectedKit !== kit.name ? 0.6 : 1,
                    transition: 'opacity 0.5s ease, border 0.3s ease, box-shadow 0.3s ease',
                    display: selectedKit === null || selectedKit === kit.name ? 'block' : 'none',
                    '&:hover': {
                      boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.6)', // Efecto de resplandor rojo al pasar el ratón
                    },
                    margin: 'auto 1rem', // Centra la tarjeta

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
                    <Typography gutterBottom variant="h5" align="center" component="div">
                      {kit.name}
                    </Typography>
                  </CardContent>
                </Card>
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
          <RegistrationForm category={selectedCategory} merch={selectedKit || ''} />
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" color="error" onClick={() => setFormVisible(false)}>
              Volver a escoger el kit
            </Button>
          </Box>
        </Box>
      ) : showQRCode ? (
        <Box textAlign="center">
          <Image src="/images/180.jpeg" alt="QR Code" width={300} height={300} style={{ maxWidth: '100%', height: 'auto' }} />
          <Button variant="contained" onClick={handleDownloadQRCode} sx={{ mt: 2 }}>
            Descargar QR
          </Button>
          <p>
            Envía el comprobante al número de WhatsApp:
            <Link href="https://wa.me/+59178340060" target="_blank" rel="noopener noreferrer">
             +591 78340060
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
