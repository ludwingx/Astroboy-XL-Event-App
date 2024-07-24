'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';

export default function L() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = (formData: any) => {
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
        <RegistrationForm
          category={selectedCategory} merch={''}  />
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
