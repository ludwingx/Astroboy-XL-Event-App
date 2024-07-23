import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const contributors = [
  {
    name: 'Tyan XL',
    instagram: 'https://www.instagram.com/tyanxl',
    linkedin: 'https://www.linkedin.com/in/tyanxl',
    photo: '/images/tyanPhoto.svg',
  },
  {
    name: 'Trucho',
    instagram: 'https://www.instagram.com/trucho',
    linkedin: 'https://www.linkedin.com/in/trucho',
    photo: '/images/truchoPhoto.svg',
  },
  {
    name: 'Ludwing',
    instagram: 'https://www.instagram.com/ludwing',
    linkedin: 'https://www.linkedin.com/in/ludwing',
    twitter: 'https://twitter.com/ludwing',
    photo: '/images/ludwingPhoto.svg',
  },
  // Añade más contribuidores según sea necesario
];

export default function Contributors() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom align="center">
        Contribuidores
      </Typography>
      <Grid container spacing={4}>
        {contributors.map((contributor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={contributor.photo}
                alt={`${contributor.name}'s photo`}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {contributor.name}
                </Typography>
                <Box display="flex" justifyContent="center" gap={1}>
                  {contributor.instagram && (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<InstagramIcon />}
                      href={contributor.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </Button>
                  )}
                  {contributor.linkedin && (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      href={contributor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </Button>
                  )}
                  {contributor.twitter && (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<TwitterIcon />}
                      href={contributor.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    </Button>
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
