import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

const servicesData = [
  { id: 1, name: 'Klasik Saç Kesimi & Kurutma', price: 450 },
  { id: 2, name: 'Uzun Saç Stili', price: 600 },
  { id: 3, name: 'Çocuk Saç Kesimi (1-5 Yaş)', price: 300 },
  { id: 4, name: 'Çocuk Saç Kesimi (6-10 Yaş)', price: 350 },
  { id: 5, name: 'Genç Saç Kesimi (10-14 Yaş)', price: 400 },
  { id: 6, name: 'Saç & Sakal Kurutma', price: 600 },
  { id: 7, name: 'Sakal Düzenleme', price: 150 },
  { id: 8, name: 'Sakal Kesimi & Ense Toplama', price: 200 },
  { id: 9, name: 'Favori Kesimi & Ense Detayı', price: 100 },
  { id: 10, name: 'Saç Yıkama & Fön', price: 150 },
  { id: 11, name: 'Dip Boya Uygulaması', price: 400 },
  { id: 12, name: 'Açma & Renkli Boyama', price: 1500 },
  { id: 13, name: 'Perma & Dalgalı Stil', price: 1500 },
  { id: 14, name: 'Cilt Bakımı (Kil & Siyah Maske)', price: 150 },
  { id: 15, name: 'Buharlı Cilt Bakımı', price: 600 },
  { id: 16, name: 'Damat Traşı & Özel Stil', price: 3000 },
];

export default function SwissQrMenu() {
  const [search, setSearch] = useState('');

  const filterItems = (items) =>
    items.filter((s) => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="menu-container">
      {/* Üst Bar */}
      <div className="top-bar">
        SWISS KUAFÖR GÜNCEL FİYAT LİSTESİ
      </div>

      {/* Arama Kutusu */}
      <input
        type="text"
        placeholder="Hizmet ara..."
        className="menu-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Hizmet Listesi */}
      <div className="menu-list-vertical">
        {filterItems(servicesData).map((s) => (
          <div key={s.id} className="menu-card-vertical">
            <span className="menu-name">{s.name}</span>
            <span className="menu-price">{s.price} ₺</span>
          </div>
        ))}
      </div>

      {/* Alt Bilgi Alanı */}
      <div className="bottom-bar">
        <div className="contact-info">
          📞 <a href="tel:+902642777171">0264 277 71 71</a>
          <br />
          🏠 Cumhuriyet, Dr.Nuri Bayar Cd No:46 D:C, 54100 Adapazarı/Sakarya
        </div>
      </div>

      {/* QR Kodu en alta taşıdık */}
      <div className="qr-container">
        <QRCode value="https://swiss-qr-menu-54f9.vercel.app" size={120} />
        <p>Menüyü QR ile açmak için tarayın</p>
      </div>
    </div>
  );
}
