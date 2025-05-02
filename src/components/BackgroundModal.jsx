// src/components/BackgroundModal.jsx
import React from 'react';
import bgImage from '../assets/images/modal-bg.png';

const BackgroundModal = ({ children }) => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-30"></div>

    {/* Modal content */}
    <div className="relative z-10 bg-[#F5E1B9] border-4 border-[#264653] rounded-2xl shadow-2xl p-6 w-11/12 max-w-md text-center">
      {children}
    </div>
  </div>
);

export default BackgroundModal;
