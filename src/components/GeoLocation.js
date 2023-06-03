import L from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';

const GeoLocation = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a Leaflet map instance
    const map = L.map('map');

    // Add the Tile layer (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    // Create the Leaflet.Locate control
    const locateControl = L.control.locate({
      locateOptions: {
        enableHighAccuracy: true,
      },
      setView: true,
      keepCurrentZoomLevel: true,
      defaultZoom: 13,
    });

    // Add the Leaflet.Locate control to the map
    locateControl.addTo(map);

    // Get the user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    }

    mapRef.current = map;

    return () => {
      // Clean up when component unmounts
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default GeoLocation;
