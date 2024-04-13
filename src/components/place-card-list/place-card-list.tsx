import PlaceCard from '../place-card/place-card';
import {OfferTypes} from '../../types/offer';

type PlaceCardListProps = {
  offers: OfferTypes[];
  onMouseOver?: (offerId: string) => void;
  onMouseOut?: () => void;
  activePlaceCard: string | null;
  classNameList: string;
  classNameItem: string;
}

export default function PlaceCardList({offers, onMouseOver, onMouseOut, activePlaceCard, classNameList, classNameItem}: PlaceCardListProps): JSX.Element {
  return (
    <div className={`${classNameList} places__list tabs__content`}>
      {offers.map((offer) => (
        <PlaceCard
          classNameItem={classNameItem}
          key={offer.id}
          offer={offer}
          onMouseOver={onMouseOver ? () => onMouseOver(offer.id) : undefined}
          onMouseOut={onMouseOut}
          isActive={activePlaceCard === offer.id}
        />
      ))}
    </div>
  );
}
