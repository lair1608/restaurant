import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './componentes/LoginForm';
import Dashboard from './pages/Dashboard';
import MenuPage from './pages/Menu';
import { useAuth } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      {token ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
