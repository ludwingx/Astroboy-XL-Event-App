"use server";
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function createClient(formData: FormData) {
  const name = formData.get("name")?.toString();
  const lastname = formData.get("lastname")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const category = formData.get("category")?.toString();
  const merch = formData.get("merch")?.toString() || null;

  // Verificación de los campos requeridos
  if (!name || !lastname || !email || !phone || !category || !merch) {
    console.error('Faltan campos en el formulario');
    return { status: 'error', message: 'Faltan campos en el formulario' };
  }

  try {
    // Creación del nuevo cliente en la base de datos
    const newClient = await prisma.clients.create({
      data: {
        name,
        lastname,
        email,
        phone,
        category,
        merch,
      },
    });

    // Redirigir a "/entradas" después de la creación exitosa
    // Redirigir utilizando la navegación en Next.js
    redirect('/entradas');

    return { status: 'success' };
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    return { status: 'error', message: 'No se pudo crear el cliente' };
  }
}
