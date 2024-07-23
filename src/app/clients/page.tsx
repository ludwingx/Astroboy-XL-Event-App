import prisma from "@/lib/db";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";

async function Clients() {
  const clients = await prisma.clients.findMany();
  console.log(clients);

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
              <TableCell sx={{ width: '15%' }}>Name</TableCell>
              <TableCell sx={{ width: '15%' }}>Last Name</TableCell>
              <TableCell sx={{ width: '20%' }}>Email</TableCell>
              <TableCell sx={{ width: '15%' }}>Phone</TableCell>
              <TableCell sx={{ width: '15%' }}>Category</TableCell>
              <TableCell sx={{ width: '15%' }}>Merch</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Clients;
