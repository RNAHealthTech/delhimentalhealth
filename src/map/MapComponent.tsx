// components/MapComponent.tsx
import React, { useEffect, useRef } from 'react';

const mapContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '300px'
};

const center = { lat: 28.6280493, lng: 77.2800304 };

const MapComponent: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const initMap = async () => {
            
            if(!mapRef.current) return;

            const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

            const mapOptions: google.maps.MapOptions = {
                center,
                zoom: 15,
                mapId: 'd95230b11102f13'
            };

            const map = new Map(mapRef.current, mapOptions)

            new AdvancedMarkerElement({
                map,
                position: center,
                title: 'Location Marker',
            });
        };

        initMap();
    }, []);

    return <div ref={mapRef} style={mapContainerStyle} />;
};

export default MapComponent;