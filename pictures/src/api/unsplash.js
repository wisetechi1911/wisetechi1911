import axios from 'axios';

const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Jhx48G7Sx5FHt2scnfs4QL2WQohn0PSF7-DoEkLGIH0'
      }
});

export default unsplash;