import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';

const Component = () => (
  <div>
    <GooglePlacesAutocomplete
       componentRestrictions: {
        country: ['jp'],
        // bounds: [
        // { lat: 50, lng: 50 },
        // { lat: 100, lng: 100 }
        // ],
      }
    />
  </div>
);


export default Component;
