// components/CompletedForm.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface CompletedFormProps {
  formData: {
    name?: string;
    lastname: string;
    email: string;
    phone: string;
    category: string;
    merch?: string; // merch es opcional
  };
}

const CompletedForm: React.FC<CompletedFormProps> = ({ formData }) => {
  const getMessageForCategory = (category: string) => {
    switch (category) {
      case 'L':
        return 'Has obtenido una entrada gratuita.';
      case 'XL':
        return `Has obtenido una entrada y merch: ${formData.merch}`;
      case 'XXL':
        return 'Has obtenido una entrada y un kit XL.';
      default:
        return '';
    }
  };

  return (
    <Box>
      <Typography variant="h4">Formulario Completado</Typography>
      <img src="/astroboy.gif" alt="Astroboy" style={{ width: '100px', height: '100px' }} />
      <Typography><strong>Nombre:</strong> {formData.name}</Typography>
      <Typography><strong>Apellidos:</strong> {formData.lastname}</Typography>
      <Typography><strong>Email:</strong> {formData.email}</Typography>
      <Typography><strong>Teléfono:</strong> {formData.phone}</Typography>
      <Typography><strong>Categoría:</strong> {formData.category}</Typography>
      <Typography>{getMessageForCategory(formData.category)}</Typography>
    </Box>
  );
};

export default CompletedForm;
