import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Map = () => {
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);
  const mapRef = useRef(null);

  const onResize = () => {
    if (window.innerWidth % 20 === 0) {
      setBrowserWidth(window.innerWidth);
    }
  };

  useEffect(() => {
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapRef.current, options);

    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    const setZoomable = (zoomable) => {
      map.setZoomable(zoomable);
    };
    setZoomable();

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [browserWidth]);

  return <MapContainer ref={mapRef} />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 600px;
`;

export default Map;
