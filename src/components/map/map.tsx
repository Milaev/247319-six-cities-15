import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import leaflet, {LayerGroup} from 'leaflet';
import {useRef, useEffect} from 'react';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import {CityTypes} from '../../types/city';
import {OfferTypes} from '../../types/offer';

type MapProps = {
  mapClassName: string;
  city: CityTypes;
  selectedOffer: string | null;
  offers: OfferTypes[];
};

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

export default function Map({mapClassName, offers, city, selectedOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markerLayer = useRef<LayerGroup>(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === selectedOffer)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(markerLayer.current);
      });
    }
  }, [map, selectedOffer, offers, city]);

  return (
    <section
      ref={mapRef}
      className={`${mapClassName}__map map`}
    />
  );
}
