// lib/clients.ts
import prisma from "@/lib/db";

export async function getClients() {
  try {
    const clients = await prisma.clients.findMany();
    return clients;
  } catch (error) {
    console.error("Error al obtener los clientes:", error);
    return [];
  }
}
