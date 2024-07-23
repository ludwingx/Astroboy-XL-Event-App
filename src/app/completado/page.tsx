'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
        <div>
          <h1>¡Registro Completado!</h1>
          <p>Tu formulario ha sido enviado exitosamente. Gracias por registrarte.</p>
          {/* Puedes agregar una imagen GIF de Astroboy aquí */}
          <img src="/path/to/astroboy.gif" alt="Astroboy" />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CompletedPage;
