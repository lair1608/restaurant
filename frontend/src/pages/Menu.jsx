import React from 'react';
import Navbar from '../componentes/Navbar'; // Ruta relativa correcta

const MenuPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Menu</h1>
        <p>Contenido del menú</p>
      </div>
    </div>
  );
};

export default MenuPage;
