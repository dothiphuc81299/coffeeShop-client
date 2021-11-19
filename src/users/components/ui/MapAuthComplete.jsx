import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const MapAuthComplete = (props) => {
  const { addressProp, setInfoUser, positionProp } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(positionProp || {});
  const [address, setAddress] = useState(addressProp || '');

  const handleChange = (value) => {
    setAddress(value);
  };
  const handleSelect = (value) => {
    geocodeByAddress(value)
      .then((results) => {
        setAddress(results[0].formatted_address);
        return getLatLng(results[0]);
      })
      .then((latLng) => {
        setPosition(latLng);
        setInfoUser({ position: latLng, address });
      })
      .catch((error) => console.error('Error', error));
  };
  const handleToggleOpen = () => {
    setIsOpen(true);
  };

  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap defaultCenter={position} defaultZoom={13}>
      <Marker
        key={props.index}
        position={position}
        onClick={() => handleToggleOpen()}
      >
        {isOpen && (
          <InfoWindow options={{ maxWidth: 100 }}>
            <span>This is InfoWindow message!</span>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ));

  return (
    <div className="w-100">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              defaultValue={address}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input w-100',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? {
                      backgroundColor: '#eeeeee',
                      cursor: 'pointer',
                      padding: '10px',
                    }
                  : {
                      backgroundColor: '#fafafa',
                      cursor: 'pointer',
                      padding: '10px',
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                    key={suggestion.placeId}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <GoogleMapExample
        containerElement={
          <div style={{ height: `350px`, width: '500px', marginTop: '10px' }} />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapAuthComplete;
