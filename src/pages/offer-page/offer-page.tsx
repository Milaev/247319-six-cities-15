import Gallery from '../../components/offer/gallery/gallery';
import OfferMainInfo from '../../components/offer/main-info/offer-main-info';
import InsideOptions from '../../components/offer/inside-options/inside-options';
import Host from '../../components/offer/host/host';
import Map from '../../components/map/map';
import ReviewsList from '../../components/offer/review-list/review-list';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import NotFoundPage from '../not-found-page/not-found-page';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/store';
import {fetchOffer, fetchNearPlaces, fetchReviews} from '../../store/api-actions';
import {store} from '../../store';
import {checkExistence, getNearPlaces, getSelectedOffer} from '../../store/selected-offer-data/selectors';
import {OfferTypes} from '../../types/offer';
import {MAX_IMAGES_PER_OFFER} from '../../const/const';

export default function OfferPage(): JSX.Element {
  const params = useParams();
  const offerId = params.id || '';

  useEffect(() => {
    store.dispatch(fetchOffer(offerId));
    store.dispatch(fetchNearPlaces(offerId));
    store.dispatch(fetchReviews(offerId));
  }, [offerId]);

  const selectedOffer = useAppSelector(getSelectedOffer);
  const nearPlaces = useAppSelector(getNearPlaces).slice(0, 3);
  const isOfferNotExist = useAppSelector(checkExistence);
  const placesForMap: OfferTypes[] = selectedOffer ? [...nearPlaces, selectedOffer] : [];

  const [activePlaceCard, setActivePlaceCard] = useState<string | null>(offerId);

  const handleMouseOver = (hoveredOfferId: string) => {
    setActivePlaceCard(hoveredOfferId);
  };

  const handleMouseOut = () => {
    setActivePlaceCard(offerId);
  };

  if (isOfferNotExist) {
    return <NotFoundPage />;
  }

  if (selectedOffer === null) {
    return <LoadingScreen />;
  }

  const { city, description, goods, host, images } = selectedOffer || {};
  const nameCity = city.name;
  const { name, avatarUrl, isPro } = host;

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>Offer. {nameCity}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.slice(0, MAX_IMAGES_PER_OFFER).map((item, index) => (
              <Gallery src={item} alt={`Image ${index + 1}`} key={item} />
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferMainInfo selectedOffer={selectedOffer} />
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((item) => (
                  <InsideOptions goods={item} key={item} />
                ))}
              </ul>
            </div>
            <Host
              name={name}
              avatarUrl={avatarUrl}
              isPro={isPro}
              description={description}
            />
            <ReviewsList />
          </div>
        </div>
        <Map
          mapClassName='offer'
          offers={placesForMap}
          city={city}
          selectedOffer={activePlaceCard}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <PlaceCardList
            classNameList={'near-places__list'}
            classNameItem={'near-places__card'}
            offers={nearPlaces}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            activePlaceCard={activePlaceCard}
          />
        </section>
      </div>
    </main>
  );
}
