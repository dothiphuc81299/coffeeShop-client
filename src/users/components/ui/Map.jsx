import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(props => {
  const { onMapClick, lat, lng } = props;
  return (
    <GoogleMap
      defaultCenter={{ lat: lat, lng: lng }}
      defaultZoom={15}
      onClick={onMapClick}
    >
      <Marker
        position={{ lat: lat, lng: lng }}
      />
    </GoogleMap>
  )
}))

export default Map;