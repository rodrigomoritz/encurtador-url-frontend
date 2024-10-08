import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UrlList: React.FC = () => {


  const [urls, setUrls] = useState<any[]>([]);

  const fetchUrls = async () => {
    try {
      const response = await axios.get(`https://encurtador-url-zn5k.onrender.com/api/url/all`);
      setUrls(response.data);
    } catch (error) {
      console.error('Error fetching URLs:', error);
    }
  };
  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>URLs Encurtadas</h2>
      <ul className="list-group">
        {urls.map((url) => (
          <li key={url.shortUrl} className="list-group-item">
            {url.originalUrl} - <a href={`/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">{url.shortUrl}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlList;
