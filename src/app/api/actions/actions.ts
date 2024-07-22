"use server";
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function createClient(formData: FormData) {
  const name = formData.get("name")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const category = formData.get("category")?.toString();
  const merch = formData.get("merch")?.toString(); // Cambiado de "selectedOption" a "merch"

  console.log({ name, lastname, email, phone, merch });

  if (!name || !lastname || !email || !phone || !category || !merch) {
    console.error('Faltan campos en el formulario');
    return;
  }

  try {
    const newClient = await prisma.clients.create({
      data: {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        category: category,
        merch: merch,
      },
    });
    console.log(newClient);
    // La redirección puede ser manejada de una forma diferente en Next.js
    // redirige a "/entradas" o maneja la navegación de otra manera
    return { status: 'success', redirect: '/entradas' };
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    // Manejo de errores aquí
    return { status: 'error', message: 'No se pudo crear el cliente' };
  }
}
