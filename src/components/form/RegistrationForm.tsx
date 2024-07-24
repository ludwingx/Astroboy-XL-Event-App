import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "./RegistrationForm.module.css";
import { createClient } from '@/app/api/actions/actions';
import { useRouter } from 'next/navigation';

interface RegistrationFormProps {
  category: string;
  merch: string | undefined;
}

export default function RegistrationForm({ category, merch = 'Ninguno' }: RegistrationFormProps) {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('category', category);
    formData.append('merch', merch);

    // Verifica el contenido del formData
    console.log('Formulario:', Array.from(formData.entries()));

    try {
      await createClient(formData);
      if (category === 'L') {
        router.push('/completado');
      } else if (category === 'XL' || category === 'XXL') {
        router.push(`/qr?category=${category}`);
      }
    } catch (error) {
      console.error('Error al crear el cliente:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <Typography variant="h4" className={styles.title}>
        Registro de Entrada
      </Typography>

      <TextField
        label="Nombre"
        id="name"
        name="name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Apellidos"
        id="lastname"
        name="lastname"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo Electrónico"
        id="email"
        name="email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Teléfono"
        id="phone"
        name="phone"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={styles.submitButton}
      >
        Registrarse
      </Button>
    </Box>
  );
}
