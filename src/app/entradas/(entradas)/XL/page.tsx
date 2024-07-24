"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import RegistrationForm from "@/components/form/RegistrationForm";
import { ticketsLinks } from "@/utils/ticketsLinks";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./XL.module.css";
import Image from "next/image";

// Opciones de merch
const merchOptions = [
  { id: "1", name: "Polera Blanca", image: "/images/poleraBlancaXL.svg" },
  { id: "2", name: "Polera Negra", image: "/images/poleraNegraXL.svg" },
  { id: "3", name: "Polera XL", image: "/images/poleraXL.svg" },
  { id: "4", name: "Gorra XL", image: "/images/gorraXL.svg" },
  { id: "5", name: "Vaso XL", image: "/images/vasoXL.svg" },
];

export default function XL() {
  const [selectedMerch, setSelectedMerch] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false); // Estado para mostrar el QR
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMerchSelect = (merchName: string) => {
    setSelectedMerch(merchName);
  };

  const handleProceed = () => {
    if (selectedMerch) {
      setFormVisible(true);
    } else {
      alert("Por favor selecciona una opción de merch");
    }
  };

  const handleFormSubmit = (formValues: any) => {
    console.log("Formulario enviado para XL", {
      ...formValues,
      merch: selectedMerch,
    });
    setFormVisible(false); // Oculta el formulario después de enviar
    setShowQRCode(true); // Muestra el QR
  };

  const handleDownloadQRCode = () => {
    // Crea un enlace para descargar la imagen QR
    const qrImageUrl = "/images/qr-code.png"; // Asegúrate de tener esta imagen en public/images
    const link = document.createElement("a");
    link.href = qrImageUrl;
    link.download = "qr-code.png"; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToSelection = () => {
    setFormVisible(false);
    setShowQRCode(false);
    setSelectedMerch(null);
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  const selectedCategory = "XL"; // Cambia esto a 'L' o 'XXL' según necesites

  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem", marginBottom: "3rem" }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h6">
          Elegiste:{" "}
          {ticketsLinks.find((link) => link.category === selectedCategory)
            ?.text || "Ninguna categoría seleccionada"}
        </Typography>
      </Box>

      {!formVisible && !showQRCode ? (
        <Box mb={4}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Elige una opción de merch:
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {/* Grid responsive */}
            <Box
              display="grid"
              gridTemplateColumns={{
                xs: "repeat(auto-fit, minmax(200px, 1fr))", // Para pantallas pequeñas
                sm: "repeat(auto-fit, minmax(200px, 1fr))", // Para pantallas medianas
                md: selectedMerch ? "1fr" : "repeat(3, 1fr)", // Para pantallas grandes
              }}
              justifyContent="center"
              alignItems="center"
              gap={2}
              mb={2}
            >
              {merchOptions.map((merch) => (
                <Card
                  key={merch.id}
                  sx={{
                    maxWidth: 345,
                    cursor: "pointer",
                    border:
                      selectedMerch === merch.name ? "2px solid red" : "none",
                    opacity:
                      selectedMerch && selectedMerch !== merch.name ? 0.6 : 1,
                    transition: "opacity 0.5s ease, border 0.3s ease, box-shadow 0.3s ease",
                    display:
                      selectedMerch === null || selectedMerch === merch.name
                        ? "block"
                        : "none",
                    "&:hover": {
                      boxShadow: "0 0 15px 5px rgba(255, 0, 0, 0.6)", // Red glow effect on hover
                    },
                    margin: "auto" // Centra la tarjeta
                  }}
                  onClick={() => handleMerchSelect(merch.name)}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={merch.image}
                    alt={merch.name}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {merch.name}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            {selectedMerch && (
              <Box textAlign="center" mt={2}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleProceed}
                  sx={{ width: "100%", maxWidth: 200 }}
                >
                  Continuar
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setSelectedMerch(null)}
                  sx={{ mt: 2 }}
                >
                  Volver a seleccionar la merch
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      ) : formVisible ? (
        <Box>
          {/* Formulario */}
          <RegistrationForm
            category={selectedCategory}
            merch={selectedMerch || ""}
          />
          <Box textAlign="center" mt={2}>
            <Button variant="outlined" color="error" onClick={handleBackToSelection}>
              Volver a escoger la merch
            </Button>
          </Box>
        </Box>
      ) : showQRCode ? (
        <Box textAlign="center">
          <Image
            src="/images/qrfake.svg"
            alt="QR Code"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Button
            variant="contained"
            onClick={handleDownloadQRCode}
            sx={{ mt: 2 }}
          >
            Descargar QR
          </Button>
          <p>
            Envía el comprobante al número de WhatsApp:
            <a
              href="https://wa.me/+5491158631851"
              className={styles.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 11 5863-1851
            </a>
          </p>
        </Box>
      ) : null}

      {!formVisible && !showQRCode && !selectedMerch && (
        <Box textAlign="center" mt={2}>
          <Link href="/entradas" passHref>
            <Button variant="outlined" color="error">
              Volver a la selección de entradas
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
