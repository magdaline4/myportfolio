// src/components/Certificate.js
import React from 'react';
import certificates from '../data/certificateData';
import '../assests/styles/Certificate.css';

const Certificate = () => {
  return (
    <section id="certificates" className="certificate-section">
      <h2>🎓 Certificates</h2>
      <div className="certificate-list">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <h3>{cert.title}</h3>
            <p><strong>Issued by:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
