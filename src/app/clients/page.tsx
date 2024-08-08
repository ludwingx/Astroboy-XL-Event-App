import prisma from "@/lib/db";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material"; // Asegúrate de incluir Box
import { format } from "date-fns";
import CategoryCount from "@/components/categoryCount/CategoryCount";

async function Clients() {
  const clients = await prisma.clients.findMany();

  // Contar los clientes por categoría
  const categoryCounts = clients.reduce((acc, client) => {
    const category = client.category || 'Otros'; // Usa 'Otros' si la categoría no está definida
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Definir el orden deseado de las categorías
  const categoryOrder = ['L', 'XL', 'XXL', 'Otros'];

  return (
    <div>
      <Box mt={4} mb={2} sx={{ textAlign: "center" }}>
        <h1>LISTA DE DATOS PERSONAS REGISTRADAS</h1>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: '80%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '5%' }}>ID</TableCell>
              <TableCell sx={{ width: '10%' }}>Nombre</TableCell>
              <TableCell sx={{ width: '10%' }}>Apellidos</TableCell>
              <TableCell sx={{ width: '20%' }}>Email</TableCell>
              <TableCell sx={{ width: '10%' }}>Celular</TableCell>
              <TableCell sx={{ width: '10%' }}>Categoria</TableCell>
              <TableCell sx={{ width: '10%' }}>Merch</TableCell>
              <TableCell sx={{ width: '15%' }}>Fecha de creación</TableCell>
              <TableCell sx={{ width: '15%' }}>Hora de creación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell>{client.id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.lastname}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell>{client.category}</TableCell>
                <TableCell>{client.merch}</TableCell>
                <TableCell>{client.created_at ? format(new Date(client.created_at), 'dd/MM/yyyy') : 'N/A'}</TableCell>
                <TableCell>{client.created_at ? format(new Date(client.created_at), 'HH:mm:ss') : 'N/A'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CategoryCount
        total={clients.length}
        categoryCounts={categoryCounts}
        categoryOrder={categoryOrder}
      />
    </div>
  );
}

export default Clients;
