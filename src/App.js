import React from 'react';
import SwissQrMenu from './SwissQrMenu'; // Menü componentin
import SocialLinks from './SocialLinks';
import './App.css'; // Tüm CSS burada

function App() {
  return (
    <div className="App">
      {/* Üstte QR Kod Alanı */}
      <SwissQrMenu />

      {/* Alt bar */}
      <div className="bottom-bar">
        <div className="contact-info">
          <span>İletişim: +90 543 712 12 54</span>
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

export default App;
