'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
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
          <Image src="https://th.bing.com/th/id/OIP.Ems_FpORknzGXtu3D4UVugHaFF?rs=1&pid=ImgDetMain" alt="Astroboy" width={200} height={200} />
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default CompletedPage;
