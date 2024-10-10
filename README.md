# Rijksmuseum Art Gallery

This project is a React-based web application that displays artworks from the Rijksmuseum's collection using their public API. Users can view a dynamic selection of three random artworks, and shuffle them to see a new set of pieces. Clicking on an artwork will show detailed information about the piece, including its title, artist, and other relevant details.

## Features

- Fetches artworks dynamically from the Rijksmuseum API.
- Displays three randomly selected artworks on page load.
- Shuffle button to display a new set of random artworks.
- Artwork details page with additional information.
- Responsive design for various screen sizes.

## Tech Stack

- **React** (with Vite)
- **Axios** for API requests
- **React Router** for navigation between the gallery and details page
- **Rijksmuseum API** to retrieve artwork data

## Setup

### 1. Clone the Repository

```
git clone https://github.com/M-Smirnovs/art-gallery.git
cd art-gallery
```

### 2. Install Dependencies

Make sure you have Node.js installed, then install the dependencies:

```
npm install
```

### 3. Get a Rijksmuseum API Key

- The provided API key `GDIWXJFe` is not valid.
- Visit [Rijksmuseum Data](https://data.rijksmuseum.nl/) and sign up for a **Rijksstudio** account to obtain your API key.
- Replace the API key in the `src/api.js` file.

```
const API_KEY = 'GDIWXJFe';
```

### 4. Run the Development Server

To start the app in development mode:

```
npm run dev
```

## API Integration

The app uses the Rijksmuseum API to fetch data. Below are the two main API calls used:

- **Fetch artworks**:
  - Retrieves a list of artworks with images using the following endpoint:

```
https://www.rijksmuseum.nl/api/nl/collection?key=[API_KEY]&ps=10&imgonly=true
```

- **Fetch artwork details**:
  - Retrieves detailed information about a single artwork using its object number:

```
https://www.rijksmuseum.nl/api/nl/collection/[objectNumber]?key=[API_KEY]
```

## Assignment Details

This project was developed as part of an **Assignment Invitation**.
