// src/pages/IntroPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import jingle from '../assets/audio/intro-jingle.mp3';
import FloatingIcon from '../components/FloatingIcon';
import '../styles/intro.css';

// Walking GIFs in public/assets/repoanime/
const icons = ['/assets/repoanime/walk1.gif', '/assets/repoanime/walk2.gif'];

export default function IntroPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = muted;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => console.error('AutoPlay error:', err));
      }
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (password.trim().toLowerCase() === 'i love') {
      setError('');
      if (audioRef.current) {
        audioRef.current.muted = muted;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => console.error('Play error:', err));
        }
      }
      navigate('/home');
    } else {
      setError('Incorrect password');
    }
  };

  const toggleMute = () => {
    setMuted(prev => {
      const next = !prev;
      if (audioRef.current) audioRef.current.muted = next;
      return next;
    });
  };

  return (
    <div className="intro-container">
      <audio ref={audioRef} src={jingle} preload="auto" loop autoPlay />
      <button className="mute-toggle" onClick={toggleMute}>
        {muted ? '🔇 Unmute' : '🔊 Mute'}
      </button>

      {icons.map((src, i) => (
        <FloatingIcon key={i} src={src} style={{ '--delay': `${i * 1.5}s` }} />
      ))}

      <form className="input-frame" onSubmit={handleSubmit}>
        <div className="password-prompt">What's the password?</div>
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="love-input"
        />
        <button type="submit" className="check-btn">Submit</button>
        {error && <div className="error-text">{error}</div>}
      </form>
    </div>
  );
}