import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchArtworkDetails } from '../api';

const ArtDetail = () => {
  const { objectNumber } = useParams();
  const [artDetail, setArtDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadArtDetail = async () => {
      try {
        const response = await fetchArtworkDetails(objectNumber);
        setArtDetail(response.data.artObject);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching artwork details:', error);
        setLoading(false);
      }
    };
    loadArtDetail();
  }, [objectNumber]);

  if (loading) return <p>Loading...</p>;

  if (!artDetail) return <p>Artwork not found</p>;

  return (
    <div className="art-detail-container">
      <img src={artDetail.webImage.url} alt={artDetail.title} className="art-detail-image" />
      <h2>{artDetail.title}</h2>
      <p><strong>Artist:</strong> {artDetail.principalOrFirstMaker}</p>
      <p><strong>Year:</strong> {artDetail.dating.presentingDate}</p>
      <p>{artDetail.description}</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back to Gallery</button>
    </div>
  );
};

export default ArtDetail;