import {useState} from 'react';
import Gallery from '../../components/offer/gallery/gallery';
import OfferMainInfo from '../../components/offer/main-info/offer-main-info';
import InsideOptions from '../../components/offer/inside-options/inside-options';
import Host from '../../components/offer/host/host';
import Map from '../../components/map/map';
import {Helmet} from 'react-helmet-async';
import {OfferTypes} from '../../types/offer';
import {useParams} from 'react-router-dom';
import {ReviewTypes} from '../../types/review';
import ReviewsList from '../../components/offer/review-list/review-list';
import NotFoundPage from '../not-found-page/not-found-page';
import PlaceCardList from '../../components/place-card-list/place-card-list';

type OfferPageProps = {
  offers: OfferTypes[];
  reviews: ReviewTypes[];
}

export default function OfferPage({offers, reviews}: OfferPageProps): JSX.Element {
  const params = useParams();
  const offerId = params.id || '';
  const selectedOffer = offers.find((offer) => offer.id === offerId)!;

  const [activePlaceCard, setActivePlaceCard] = useState<string | null>(offerId);

  const handleMouseOver = (hoveredOfferId: string) => {
    setActivePlaceCard(hoveredOfferId);
  };

  const handleMouseOut = () => {
    setActivePlaceCard(offerId);
  };

  if(!selectedOffer) {
    return <NotFoundPage />;
  }

  const {city, description, goods, host, images} = selectedOffer;
  const nameCity = city.name;
  const {name, avatarUrl, isPro} = host;
  const nearPlaces = offers
    .filter((offer) => offer.city.name === selectedOffer.city.name && offer.id !== selectedOffer.id)
    .slice(0, 3);
  const placesForMap = [...nearPlaces, selectedOffer];

  return (
    <main className="page__main page__main--offer">
      <Helmet>
        <title>Offer. {nameCity}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {images.map((item, index) => (
              <Gallery src={item} alt={`Image ${index + 1}`} key={item}/>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <OfferMainInfo selectedOffer={selectedOffer}/>
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
            <ReviewsList
              reviews={reviews}
              offerId={offerId}
            />
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
