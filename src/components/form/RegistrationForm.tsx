import { TextField, Button, Box, Typography } from "@mui/material";
import styles from "./RegistrationForm.module.css";
import { createClient } from '@/app/api/actions/actions';
import { useRouter } from 'next/navigation';

interface RegistrationFormProps {
  category: string;
  merch: string | undefined;
}

export default function RegistrationForm({ category, merch }: RegistrationFormProps) {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append('category', category); // Incluye category en los datos del formulario
    formData.append('merch', merch || ''); // Incluye merch en los datos del formulario

    // Verifica el contenido del formData
    console.log('Formulario:', Array.from(formData.entries()));

    createClient(formData).then(() => {
      if (category === 'L') {
        router.push('/completado'); // Redirige a la página de confirmación
      } else if (category === 'XL' || category === 'XXL') {
        router.push(`/qr?category=${category}`); // Redirige a la página con QR pasando la categoría
      }
    });
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
