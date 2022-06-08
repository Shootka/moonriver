import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.scss'
import  mapStyles from './mapStyles'

const Map = () => {
  return (
    <>
        <div style={{height: '610px', width: '50%'}}>
          <GoogleMapReact
            bootstrapURLKeys={{key: "AIzaSyAXcqifbr56IlmXtft-QSRUaOGiovNh5dE"}}
            defaultCenter={{
              lat: 50.45,
              lng: 30.52
            }}
            options={{styles: mapStyles.dark}}
            defaultZoom={10}
          >
          </GoogleMapReact>
        </div>
    </>
  );
};

export default Map;