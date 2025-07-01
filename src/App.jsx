import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import SongConverter from './pages/SongConverter';
import { UserProvider } from './context/UserContext';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Default landing page */}
          <Route path="/" element={<IntroPage />} />

          {/* Main content pages */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/convert" element={<SongConverter />} />

          {/* Redirect all unknown routes to intro */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
