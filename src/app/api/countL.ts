import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/db'; // Ensure the path to your Prisma instance is correct.

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Count the clients in the category 'L'
    const count = await prisma.clients.count({
      where: { category: 'L' },
    });
    // Send the count in the response
    res.status(200).json({ count });
  } catch (error) {
    // Log the error and send a 500 status code in case of an error
    console.error('Error counting clients:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
