import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArtworks } from '../api';

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const response = await fetchArtworks();
        setArtworks(response.data.artObjects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artworks:', error);
        setLoading(false);
      }
    };
    loadArtworks();
  }, []);

  return (
    <div className="gallery-container">
      <h1>Rijksmuseum Art Gallery</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="art-gallery">
          {artworks.map((art) => (
            <Link to={`/art/${art.objectNumber}`} key={art.objectNumber}>
              <img src={art.webImage.url} alt={art.title} className="art-image" />
              <p>{art.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtGallery;
