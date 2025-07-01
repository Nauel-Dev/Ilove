// src/components/Header.jsx
import React from 'react';
import { useUser } from '../context/UserContext';

const logo = '/assets/images/logo.png';

export default function Header() {
  const { user } = useUser();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <img src={logo} alt="$ILove Logo" className="logo" />
      <h1 className="project-name">$ILove</h1>
      <nav className="nav-links">
        <button onClick={() => scrollTo('welcome')}>Home</button>
        <button onClick={() => scrollTo('gallery')}>Gallery</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('footer')}>Footer</button>
      </nav>
      {user?.username && <div className="user-info">Hello, {user.username}</div>}
    </header>
  );
}
