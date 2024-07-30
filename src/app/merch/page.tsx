'use client';

import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import styles from './merch.module.css';

const merchItems = [
  { id: '1', name: 'Polera Blanca XL', image: '/images/poleraBlancaXL.svg', price: 'xxxx' },
  { id: '2', name: 'Polera Negra XL', image: '/images/poleraNegraXL.svg', price: 'xxx' },
  { id: '3', name: 'Polera XL', image: '/images/poleraXL.svg', price: 'xxx' },
  { id: '4', name: 'Gorra XL v2', image: '/images/gorraXLv2.svg', price: 'xxx' },
  { id: '5', name: 'Vaso XL', image: '/images/vasoXL.svg', price: 'xxx' },
];

export default function Merch() {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4">MERCH</Typography>
      </Box>
      <Grid container spacing={4}>
        {merchItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={3}>
            <Card
              className={styles.card}
              sx={{
                objectFit: 'cover',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.6)', // Red glow effect
                },
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={item.image}
                alt={item.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" fontSize="1rem">{item.name}</Typography>
                <Typography variant="body2" fontSize="0.875rem">{item.price}</Typography>
                <Box textAlign="center" mt={2}>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FaWhatsapp />}
                    component={Link}
                    href={`https://wa.me/+59178340060?text=Hola,%20quiero%20pedir%20${encodeURIComponent(item.name)}%20por%20${item.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pedir
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
