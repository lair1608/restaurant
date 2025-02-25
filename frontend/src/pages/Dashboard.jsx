import React from 'react';
import Navbar from '../componentes/Navbar'

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <div style={{ flex: 1, padding: '20px' }}>
        <h1>Dashboard</h1>
        <p>Bienvenido al Dashboard</p>
      </div>
    </div>
  );
};

export default Dashboard;
