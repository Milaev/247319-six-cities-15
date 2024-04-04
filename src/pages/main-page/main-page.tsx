import NavTab from '../../components/nav-tab/nav-tab';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import NoPlacesToStay from '../../components/no-places-to-stay/no-places-to-stay';
import {useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {CITIES, getCityData} from '../../const/city';
import {changeLocation} from '../../store/location-process/location-process';
import {getCurrentLocation} from '../../store/location-process/selectors';
import {getOffers} from '../../store/app-data/selectors';

export default function MainPage(): JSX.Element {
  const [activePlaceCard, setActivePlaceCard] = useState<string | null>(null);

  const offers = useAppSelector(getOffers);
  const currentLocation = useAppSelector(getCurrentLocation);
  const dispatch = useAppDispatch();

  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation);
  const placesFound = currentOffers.length;
  const emptyPage = currentOffers.length === 0;

  const handleMouseOver = (offerId: string) => {
    setActivePlaceCard(offerId);
  };

  const handleMouseOut = () => {
    setActivePlaceCard(null);
  };

  return (
    <main className={`page__main page__main--index ${emptyPage ? 'page__main--index-empty' : ''}`}>
      <Helmet>
        <title>Enjoy your trip. 6 cities</title>
      </Helmet>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
              <NavTab
                key={city.id}
                city={city.name}
                isActive={city.name === currentLocation}
                onNavTabClick={() => {
                  dispatch(changeLocation(city.name));
                }}
              />
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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li
                      className="places__option places__option--active"
                      tabIndex={0}
                    >
                      Popular
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: low to high
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Price: high to low
                    </li>
                    <li className="places__option" tabIndex={0}>
                      Top rated first
                    </li>
                  </ul>
                </form>
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
