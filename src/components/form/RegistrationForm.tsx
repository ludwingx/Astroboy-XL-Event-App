import { useState } from 'react';
import { TextField, Button, Box, Typography, CircularProgress, Alert } from "@mui/material";
import styles from "./RegistrationForm.module.css";
import { createClient } from '@/app/api/actions';
import { useRouter } from 'next/navigation';

interface RegistrationFormProps {
  category: string;
  merch: string | undefined;
}

export default function RegistrationForm({ category, merch = 'Ninguno' }: RegistrationFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);  // Agrega el estado `submitted`
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    formData.append('category', category);
    formData.append('merch', merch);

    // Verifica el contenido del formData
    console.log('Formulario:', Array.from(formData.entries()));

    try {
      await createClient(formData);
      setLoading(false);
      setSubmitted(true);  // Cambia el estado a `submitted`
      if (category === 'L') {
        router.push('/completado');
      } else if (category === 'XL' || category === 'XXL') {
        router.push(`/qr?category=${category}`);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
      setError('Error al registrar. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Typography variant="h4">¡Gracias por registrarte!</Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={styles.formContainer}
      aria-live="assertive"
    >
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress color="error" />
        </Box>
      ) : (
        <>
          <Typography variant="h4" className={styles.title}>
            Registro de Entrada
          </Typography>

          {error && (
            <Alert severity="error" className={styles.errorMessage}>
              {error}
            </Alert>
          )}

          <TextField
            label="Nombre"
            id="name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Apellidos"
            id="lastname"
            name="lastname"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Correo Electrónico"
            id="email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Teléfono"
            id="phone"
            name="phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <Box display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="error"
              className={styles.submitButton}
            >
              Registrarse
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
