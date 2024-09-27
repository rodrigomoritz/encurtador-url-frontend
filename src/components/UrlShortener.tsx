import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png'; // Importe a imagem da logo

const UrlShortener: React.FC = () => {

  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://encurtador-url-zn5k.onrender.com/api/url/shorten`, { originalUrl }, {
        timeout: 5000,
        withCredentials:false,
        headers: {
        'Content-Type': 'application/json'
        }
      });
      setShortUrl(response.data.shortUrl);
      setOriginalUrl('');
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  const copyToClipboard = () => {
    const fullUrl = `${window.location.origin}/${shortUrl}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((error) => {
        console.error('Falha ao copiar a URL: ', error);
      });
  };

  return (

    <div className="mb-4">
      <div className="row d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="col-md-6 text-center">
        <img src={logo} alt="Encurtador de URL´s" className="mb-4" style={{ maxWidth: '200px' }} />
        <form onSubmit={handleSubmit} className="input-group">
          <input
            type="url"
            className="form-control"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Digite sua URL aqui!"
            required
          />
          <button type="submit" className="btn btn-primary">Encurtar</button>
        </form>

        {shortUrl && (
          <div className="alert alert-success mt-3" role="alert">
            URL encurtada: <a href={`/${shortUrl}`} target="_blank" rel="noopener noreferrer">{shortUrl}</a>

            <button className="btn btn-outline-secondary ms-3" onClick={copyToClipboard}>
              {copied ? 'Copiado!' : 'Copiar URL'}
            </button>
          </div>
          )}
          </div>
          </div>
      </div>
  );
};

export default UrlShortener;
