'use client';

import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface RegistrationFormProps {
  onSubmit: (formData: any) => void;
  category: string; // Agrega la prop de categoría
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit, category }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, lastName, phone, email, category }); // Incluye la categoría
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Apellido"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        margin="normal"
      />
      <Button type="submit" variant="contained">
        Enviar
      </Button>
    </Box>
  );
};

export default RegistrationForm;
