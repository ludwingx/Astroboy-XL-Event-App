'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';

export default function L() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isLFull, setIsLFull] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const checkCategoryL = async () => {
      try {
        const response = await fetch('/api/countL');
        const data = await response.json();
        if (data.count >= 100) {
          setIsLFull(true);
        }
      } catch (error) {
        console.error('Error fetching L category count:', error);
      }
    };
    checkCategoryL();
  }, []);

  const handleFormSubmit = (formData: any) => {
    if (isLFull) {
      alert("No hay más entradas disponibles para la categoría L");
      return;
    }
    console.log('Formulario enviado para L', formData);
    setFormSubmitted(true);
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  const selectedCategory = 'L';

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste: {ticketsLinks.find(link => link.category === selectedCategory)?.text || 'Ninguna categoría seleccionada'}
        </Typography>
      </Box>
      {!formSubmitted ? (
        isLFull ? (
          <Box textAlign="center">
            <Typography variant="h5" gutterBottom>
              Lo sentimos, no hay más entradas disponibles para la categoría L.
            </Typography>
          </Box>
        ) : (
          <RegistrationForm category={selectedCategory} merch={''}  />
        )
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
          <Button variant="outlined" color="error">
            Volver a la selección de entradas
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
