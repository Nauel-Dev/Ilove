import React, { useState } from 'react';
import { convertToILovePattern } from '../utils/songUtils';
import '../styles/converter.css';
export default function SongConverter() {
  const [lyrics, setLyrics] = useState('');
  const handleRemix = () => setLyrics(convertToILovePattern(lyrics));
  return (
    <div className="converter-container">
      <textarea
        value={lyrics}
        onChange={e => setLyrics(e.target.value)}
        placeholder="Paste lyrics here"
      />
      <button onClick={handleRemix}>Convert to I loveee...</button>
      <pre className="output">{lyrics}</pre>
    </div>
  );
}
