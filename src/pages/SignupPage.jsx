// src/pages/SignupPage.jsx
import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import '../styles/signup.css';

const avatars = ['/assets/avatars/a1.png', '/assets/avatars/a2.png'];

export default function SignupForm({ onComplete }) {
  const { setUser } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % avatars.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const avatar = avatars[currentIndex];
    setUser({ username, avatar });

    // Call parent to:
    // - Play sound
    // - Trigger spinner
    // - Start fade out
    onComplete();
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="avatar-preview">
        <img src={avatars[currentIndex]} alt="avatar" className="animated-avatar" />
      </div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit">Start</button>
    </form>
  );
}
