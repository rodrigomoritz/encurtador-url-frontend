// src/Redirect.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/custom.css';  // Importando o CSS

const Redirect: React.FC = () => {
  const { shortUrl } = useParams<{ shortUrl: string }>();
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<'success' | 'danger' | null>(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`${apiUrl}/${shortUrl}`);

        if (response.data.originalUrl) {
          setTimeout(() => {
            window.location.href = response.data.originalUrl;
          }, 2600);
        } else {
          console.error('URL original não encontrada');
          setAlertMessage('URL original não encontrada.');
          setAlertType('danger');
        }
      } catch (error) {
        console.error('Erro ao redirecionar:', error);
        setAlertMessage('Erro ao redirecionar. Por favor, verifique a URL encurtada.');
        setAlertType('danger');
      }
    };

    fetchOriginalUrl();
  }, [shortUrl,apiUrl]);

  const handleCloseAlert = () => {
    setAlertMessage(null);
    setAlertType(null);
    window.location.href = '/';
  };

  return (
    <div className="mb-4">
      <div className="row d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="col-12 text-center">
         {alertMessage && (
            <div className={`alert alert-${alertType} alert-dismissible fade show`} role="alert">
              {alertMessage}
              <button type="button" className="btn-close" onClick={handleCloseAlert} aria-label="Close"></button>
            </div>
          )}
          {!alertMessage &&(
            <p>
            <div className="cssload-thecube">
              <div className="cssload-cube cssload-c1"></div>
              <div className="cssload-cube cssload-c2"></div>
              <div className="cssload-cube cssload-c4"></div>
	            <div className="cssload-cube cssload-c3"></div>
            </div>
          </p>
          )}
        </div>
     </div>
    </div>
  );
};

export default Redirect;
