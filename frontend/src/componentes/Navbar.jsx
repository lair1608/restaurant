import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div style={{ width: '200px', background: '#f4f4f4', height: '100vh', padding: '20px' }}>
      <h3>Menú</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
