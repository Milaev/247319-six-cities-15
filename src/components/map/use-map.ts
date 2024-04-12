import leaflet from 'leaflet';
import {useState, useRef, useEffect, MutableRefObject} from 'react';
import {CityTypes} from '../../types/city';

export default function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityTypes
) {
  const [map, setMap] = useState<leaflet.Map | undefined>(undefined);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; <a href="https://carto.com/attributions">ROMAN</a>',
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}
