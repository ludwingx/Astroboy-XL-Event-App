import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaSpotify } from "react-icons/fa"; // Importar el icono de Spotify
import { FaSoundcloud } from "react-icons/fa"; // Importa el icono de SoundCloud
import GithubIcon from "@mui/icons-material/GitHub";
const contributors = [
  {
    name: "Tyan XL",
    profetion: "Artista y Compositor",
    instagram: "https://www.instagram.com/tyan.xl/",
    youtube: "https://www.youtube.com/@tyanxl",
    soundCloud: "https://soundcloud.com/kid-tyan",
    spotify: "https://open.spotify.com/intl-es/artist/0CwAkk201F5GOYyUbcv6f9?si=WQPmdH8WQX2muoWFi_sADA&nd=1&dlsi=faa159ebf1df4850",
    photo: "/images/tyanPhoto.svg",
  },
  {
    name: "Trucho",
    profetion: "Tienda de ropa",
    instagram: "https://www.instagram.com/trucho_clothing/",
    youtube: "https://www.youtube.com/@truchostudios?si=-irCLArtcFr1IC2r",
    photo: "/images/truchoPhoto.svg",
  },
  {
    name: "Ludwing",
    profetion: "Desarrollador Web",
    instagram: "https://www.instagram.com/luwin_dev/",
    github: "https://github.com/ludwingx",
    photo: "/images/ludwingPhoto.jpg",
  },
  // Añade más contribuidores según sea necesario
];

export default function Contributors() {
  return (
    <Container maxWidth="md" sx={{ marginTop: "2rem" }}>
      <Typography variant="h5" gutterBottom align="center">
        CONTRIBUIDORES
      </Typography>
      <Grid container spacing={4}>
        {contributors.map((contributor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                image={contributor.photo}
                alt={`${contributor.name}'s photo`}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography variant="h5">{contributor.name}</Typography>
                <Typography  color="error" style={{fontSize: '14px'}}>{contributor.profetion}</Typography>
                <Box display="flex" justifyContent="center" gap={1}>
                  {contributor.instagram && (
                    <IconButton
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)", // Color de fondo al pasar el mouse
                          transform: "scale(1.2)", // Efecto de zoom
                          color: "red",
                        },
                      }}
                      href={contributor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon />
                    </IconButton>
                  )}

                  {contributor.youtube && (
                    <IconButton
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                          transform: "scale(1.2)",
                          color: "red",
                        },
                      }}
                      href={contributor.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <YouTubeIcon />
                    </IconButton>
                  )}
                  {contributor.soundCloud && (
                    <IconButton
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                          transform: "scale(1.2)",
                          color: "red",
                        },
                      }}
                      href={contributor.soundCloud}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSoundcloud />
                    </IconButton>
                  )}
                  {contributor.spotify && (
                    <IconButton
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                          transform: "scale(1.2)",
                          color: "red",
                        },
                      }}
                      href={contributor.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify />
                    </IconButton>
                  )}
                  {contributor.github && (
                    <IconButton
                      sx={{
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                          transform: "scale(1.2)",
                          color: "red",
                        },
                      }}
                      href={contributor.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon />
                    </IconButton>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
