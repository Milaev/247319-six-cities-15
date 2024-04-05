import NavTab from '../../components/nav-tab/nav-tab';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';
import SortingForm from '../../components/sorting-form/sorting-form';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { CITIES, getCityData } from '../../const/city';
import { changeLocation } from '../../store/location-process/location-process';
import { getCurrentLocation } from '../../store/location-process/selectors';
import { getOffers } from '../../store/app-data/selectors';
import { OfferTypes } from '../../types/offer';

export default function MainPage(): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState<string | null>(null);
  const [sortingType, setSortingType] = useState<string>('popular');

  const offers = useAppSelector(getOffers);
  const currentLocation = useAppSelector(getCurrentLocation);
  const dispatch = useAppDispatch();

  const handleMouseOver = (offerId: string) => {
    setActivePlaceCard(offerId);
  };

  const handleMouseOut = () => {
    setActivePlaceCard(null);
  };

  const handleSortingChange = (type: string) => {
    setSortingType(type);
  };

  const sortingOffers = (offersToSort: OfferTypes[]) => {
    switch (sortingType) {
      case 'priceLowToHigh':
        return offersToSort.slice().sort((a, b) => a.price - b.price);
      case 'priceHighToLow':
        return offersToSort.slice().sort((a, b) => b.price - a.price);
      case 'topRatedFirst':
        return offersToSort.slice().sort((a, b) => b.rating - a.rating);
      default:
        return offersToSort;
    }
  };

  const currentOffers = sortingOffers(offers.filter((offer) => offer.city.name === currentLocation));
  const placesFound = currentOffers.length;
  const emptyPage = currentOffers.length === 0;

  return (
    <main className={`page__main page__main--index ${emptyPage ? 'page__main--index-empty' : ''}`}>
      <Helmet>
        <title>Enjoy your trip. 6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map(({name, id}) => (
              <li className="locations__item" key={id}>
                <NavTab
                  city={name}
                  isActive={name === currentLocation}
                  onNavTabClick={() => {
                    dispatch(changeLocation(name));
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          {emptyPage ? (
            <NoPlacesToStay
              city={currentLocation}
            />
          ) : (
            <>
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesFound} places to stay in {currentLocation}</b>
                <SortingForm
                  onSortingChange={handleSortingChange}
                />
                <PlaceCardList
                  classNameList={'cities__places-list'}
                  classNameItem={'cities__card'}
                  offers={currentOffers}
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  activePlaceCard={activePlaceCard}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  mapClassName='cities'
                  offers={currentOffers}
                  city={getCityData(currentLocation)}
                  selectedOffer={activePlaceCard}
                />
              </div>
            </>)}
        </div>
      </div>
    </main>
  );
}
