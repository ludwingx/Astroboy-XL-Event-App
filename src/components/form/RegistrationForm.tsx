// components/form/RegistrationForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from './RegistrationForm.module.css';

interface FormData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  selectedOption?: string;
}

interface RegistrationFormProps {
  selectedOption?: string | null;
}

export default function RegistrationForm({ selectedOption }: RegistrationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    selectedOption: selectedOption || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado', formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className={styles.formContainer}>
      <h2 className={styles.title}>Registro de Entrada</h2>
      {formData.selectedOption && (
        <Typography variant="h6" className={styles.selectedOption}>
          Opción seleccionada: {formData.selectedOption}
        </Typography>
      )}
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Apellidos"
        name="lastname"
        value={formData.lastname}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        value={formData.email}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" className={styles.submitButton}>
        Registrarse
      </Button>
    </Box>
  );
}
