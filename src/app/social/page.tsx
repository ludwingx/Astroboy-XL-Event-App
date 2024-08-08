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
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

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
    instagram: "https://www.instagram.com/ludwing_dev/",
    portfolio: "https://my-portfolio-ludwingxs-projects.vercel.app/",
    github: "https://github.com/ludwingx",
    linkedin: "https://www.linkedin.com/in/ludwingarmijosaavedra/",
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
                aria-label={`${contributor.name}'s photo`}
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
                <Typography color="error" style={{ fontSize: "14px" }}>
                  {contributor.profetion}
                </Typography>
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
                          backgroundColor: "rgba(0, 0, 0, 0.08)",
                          transform: "scale(1.2)",
                          color: "red",
                        },
                      }}
                      href={contributor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram de ${contributor.name}`}
                    >
                      <InstagramIcon aria-label="Instagram" />
                    </IconButton>
                  )}
                  {contributor.portfolio && (
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
                      href={contributor.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Portfolio de ${contributor.name}`}
                    >
                      <HomeRepairServiceIcon aria-label="Portfolio" />
                    </IconButton>
                  )}
                  {contributor.linkedin && (
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
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn de ${contributor.name}`}
                    >
                      <LinkedinIcon aria-label="LinkedIn" />
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
                      aria-label={`YouTube de ${contributor.name}`}
                    >
                      <YouTubeIcon aria-label="YouTube" />
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
                      aria-label={`SoundCloud de ${contributor.name}`}
                    >
                      <FaSoundcloud aria-label="SoundCloud" />
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
                      aria-label={`Spotify de ${contributor.name}`}
                    >
                      <FaSpotify aria-label="Spotify" />
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
                      aria-label={`GitHub de ${contributor.name}`}
                    >
                      <GithubIcon aria-label="GitHub" />
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
