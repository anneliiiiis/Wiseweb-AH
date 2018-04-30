import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 58.3775191, lng: 26.7332704 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 58.3775191, lng: 26.7332704 }} />}
  </GoogleMap>
))

