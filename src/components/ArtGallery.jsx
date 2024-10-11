import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArtworks } from '../api';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [displayedArt, setDisplayedArt] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all artworks on component mount
  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const response = await fetchArtworks('', 10); // Fetch more results to have enough to shuffle
        setArtworks(response.data.artObjects);
        shuffleArtworks(response.data.artObjects); // Shuffle and display three on initial load
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      }
    };
    loadArtworks();
  }, []);

  // Shuffle the array and pick the first 3 items
  const shuffleArtworks = (artList) => {
    const shuffled = [...artList].sort(() => 0.5 - Math.random()).slice(0, 3);
    setDisplayedArt(shuffled);
  };

  // Handler for Shuffle button
  const handleShuffle = () => {
    shuffleArtworks(artworks);
  };

  return (
    <div className="gallery-container">
      <h1>Rijksmuseum Shuffle</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="art-gallery-container">
          <div className="art-gallery">
            {displayedArt.map((art) => (
              <Link to={`/art/${art.objectNumber}`} key={art.objectNumber}>
                <img src={art.webImage.url} alt={art.title} className="art-image" />
                {/* <p>{art.title}</p> */}
              </Link>
            ))}
          </div>
        </div>
      )}
      <div className="btn-container">
        <button onClick={handleShuffle} className="shuffle-btn">Shuffle</button>
      </div>
    </div>
  );
};

export default ArtGallery;
