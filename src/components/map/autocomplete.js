import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';

const Component = () => (
  <div>
    <GooglePlacesAutocomplete
      onSelect={console.log}
    />
  </div>
);

export default Component;
