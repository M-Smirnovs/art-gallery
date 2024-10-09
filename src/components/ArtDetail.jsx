import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artPieces } from '../data/artPieces';

const ArtDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const art = artPieces.find((piece) => piece.id === parseInt(id));

  return (
    <div className="art-detail-container">
      {art ? (
        <>
          <img src={art.image} alt={art.name} className="art-detail-image" />
          <h2>{art.name}</h2>
          <p><strong>Artist:</strong> {art.artist}</p>
          <p><strong>Year:</strong> {art.year}</p>
          <button onClick={() => navigate(-1)} className="back-btn">Back to Gallery</button>
        </>
      ) : (
        <p>Art piece not found</p>
      )}
    </div>
  );
};

export default ArtDetail;