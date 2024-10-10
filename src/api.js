import axios from 'axios';

// Your API key
const API_KEY = 'GDIWXJFe';

// Axios instance with base configuration
const api = axios.create({
  baseURL: 'https://www.rijksmuseum.nl/api/nl',
  params: {
    key: API_KEY,
    format: 'json',
  },
});

// Fetch artworks (you can customize the parameters)
export const fetchArtworks = (query = '', ps = 6) => {
  return api.get('/collection', {
    params: {
      q: query,
      ps,
      imgonly: true, // Only include results with images
    },
  });
};

// Fetch details for a specific artwork
export const fetchArtworkDetails = (objectNumber) => {
  return api.get(`/collection/${objectNumber}`);
};