'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

const CompletedPage: React.FC = () => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  // Verifica si hay una redirección previa
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const redirect = queryParams.get('redirect');
    if (redirect) {
      router.push(redirect);
    } else {
      setShowMessage(true);
    }
  }, [router]);

  return (
    <div>
      {showMessage ? (
        <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
          <h1>¡Registro Completado!</h1>
          <p>Tu formulario ha sido enviado exitosamente. Gracias por registrarte.</p>
          <Image
            src="https://th.bing.com/th/id/R.126b3f169391927cc65edbb70f8515ba?rik=awBkfetUDznLcw&pid=ImgRaw&r=0"
            alt="Astroboy"
            width={200}
            height={200}
            quality={100}
            style={{ marginTop: '2rem', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            unoptimized
          />
        </Box>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CompletedPage;
