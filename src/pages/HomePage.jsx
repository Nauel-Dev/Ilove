import React, { useState } from 'react';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import About from '../components/About';
import Footer from '../components/Footer';
import SignupForm from './SignupPage';
import { useUser } from '../context/UserContext';
import '../styles/global.css';
import './homePopup.css';
import './profile.css';

export default function HomePage() {
  const { user } = useUser();
  const [signedUp, setSignedUp] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignupComplete = () => {
    const audio = new Audio('/sounds/start.wav');
    audio.play();
    setLoading(true);
    setFadeOut(true);
    setTimeout(() => {
      setSignedUp(true);
    }, 1000);
  };

  return (
    <>
      <Header />

      <main className="home-main">

        {/* Facebook-Style Banner & Profile Info */}
        {signedUp && user?.avatar && (
          <>
            <div className="profile-banner" />
            <div className="profile-info">
              <img src={user.avatar} alt="Profile" className="profile-avatar" />
              <h2 className="profile-username">{user.username}</h2>
            </div>
          </>
        )}

        {/* Welcome Text */}
        <section id="welcome" className="section welcome">
          <h2>Welcome to $ILove!</h2>
          <p>Navigate using the menu above.</p>
        </section>

        {/* Gallery */}
        <section id="gallery" className="section gallery">
          <Gallery />
        </section>

        {/* About */}
        <section id="about" className="section about">
          <About />
        </section>
      </main>

      <Footer id="footer" />

      {/* Signup Modal */}
      {!signedUp && (
        <div className={`popup-background ${fadeOut ? 'fade-out' : ''}`}>
          <div className={`popup-container ${fadeOut ? 'fade-out' : ''}`}>
            {loading ? (
              <div className="spinner"></div>
            ) : (
              <SignupForm onComplete={handleSignupComplete} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
