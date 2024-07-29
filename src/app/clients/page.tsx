import prisma from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from "@mui/material";
import { format } from "date-fns";

async function Clients() {
  const clients = await prisma.clients.findMany();

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
              <TableCell sx={{ width: '10%' }}>Name</TableCell>
              <TableCell sx={{ width: '10%' }}>Last Name</TableCell>
              <TableCell sx={{ width: '20%' }}>Email</TableCell>
              <TableCell sx={{ width: '10%' }}>Phone</TableCell>
              <TableCell sx={{ width: '10%' }}>Category</TableCell>
              <TableCell sx={{ width: '10%' }}>Merch</TableCell>
              <TableCell sx={{ width: '15%' }}>Fecha de creación</TableCell>
              <TableCell sx={{ width: '15%' }}>Hora de creación</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((clients) => (
              <TableRow key={clients.id}>
                <TableCell>{clients.id}</TableCell>
                <TableCell>{clients.name}</TableCell>
                <TableCell>{clients.lastname}</TableCell>
                <TableCell>{clients.email}</TableCell>
                <TableCell>{clients.phone}</TableCell>
                <TableCell>{clients.category}</TableCell>
                <TableCell>{clients.merch}</TableCell>
                <TableCell>{clients.created_at ? format(new Date(clients.created_at),  'dd/MM/yyyy') : 'N/A'}</TableCell>
                <TableCell>{clients.created_at ? format(new Date(clients.created_at),  'HH:mm:ss') : 'N/A' }</TableCell >
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Clients;
