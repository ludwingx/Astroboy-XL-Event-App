"use server";
import prisma from "@/lib/db";
import { NextResponse } from 'next/server'; // Importing NextResponse

export async function createClient(formData: FormData) {
  const name = formData.get("name")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const category = formData.get("category")?.toString();
  const merch = formData.get("merch")?.toString() || 'Ninguno';

  if (!name || !lastname || !email || !phone || !category) {
    console.error('Faltan campos en el formulario');
    return NextResponse.json({ status: 'error', message: 'Faltan campos en el formulario' }, { status: 400 });
  }

  try {
    await prisma.clients.create({
      data: {
        name,
        lastname,
        email,
        phone,
        category,
        merch,
        created_at: new Date(), // Asegúrate de guardar la fecha de creación
      },
    });

    // Returning a response object to indicate success
    return NextResponse.json({ status: 'success' }, { status: 200 });
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    return NextResponse.json({ status: 'error', message: 'No se pudo crear el cliente' }, { status: 500 });
  }
}
