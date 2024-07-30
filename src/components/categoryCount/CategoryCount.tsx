import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

interface CategoryCountProps {
  total: number;
  categoryCounts: Record<string, number>;
  categoryOrder: string[];
}

const CategoryCount: React.FC<CategoryCountProps> = ({ total, categoryCounts, categoryOrder }) => {
  return (
    <Box mt={4} mb={2} sx={{ textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Total de clientes: {total}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Distribución por categoría:
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {categoryOrder.map((category) => (
          category in categoryCounts ? (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6">{category}</Typography>
                  <Typography variant="h5" component="div">
                    {categoryCounts[category]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ) : null
        ))}
        {Object.keys(categoryCounts)
          .filter(category => !categoryOrder.includes(category))
          .map(category => (
            <Grid item xs={12} sm={6} md={4} key={category}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h6">{category}</Typography>
                  <Typography variant="h5" component="div">
                    {categoryCounts[category]}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default CategoryCount;
