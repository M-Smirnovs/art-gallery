import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { artPieces } from '../data/artPieces';

const ArtGallery = () => {
  const [displayedArt, setDisplayedArt] = useState(shuffleArt());

  function shuffleArt() {
    return artPieces.sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  return (
    <div className="gallery-container">
      <h1>Art Gallery</h1>
      <div className="art-gallery">
        {displayedArt.map((art) => (
          <Link to={`/art/${art.id}`} key={art.id}>
            <img src={art.image} alt={art.name} className="art-image" />
          </Link>
        ))}
      </div>
      <button className="shuffle-btn" onClick={() => setDisplayedArt(shuffleArt())}>
        Shuffle Art
      </button>
    </div>
  );
};

export default ArtGallery;