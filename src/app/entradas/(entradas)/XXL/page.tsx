'use client';

import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import Link from 'next/link';
import RegistrationForm from '@/components/form/RegistrationForm';
import { ticketsLinks } from '@/utils/ticketsLinks';

export default function XXL() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFormSubmit = (formValues: any) => {
    console.log('Formulario enviado para XXL', formValues);
    // Aquí puedes manejar el envío del formulario
    setFormSubmitted(true);
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
        <RegistrationForm onSubmit={handleFormSubmit} category="XXL" />
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
