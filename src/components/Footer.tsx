// src/Footer.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'; // Importe o CSS do rodapé se necessário

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} Mrtz. Todos os direitos reservados.</p>
        <div className="social-links mt-2">
          <a href="https://www.linkedin.com/in/rodrigomoritz/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Linkedin</a>
          <a href="https://github.com/rodrigomoritz" target="_blank" rel="noopener noreferrer" className="text-white mx-2">Github</a>
          <a href="https://linktr.ee/rodrigomoritz" target="_blank" rel="noopener noreferrer" className="text-white mx-2">linktr.ee</a>
        </div>
        <div className="mt-2">
          <Link to="/" className="text-white mx-2">Início</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
