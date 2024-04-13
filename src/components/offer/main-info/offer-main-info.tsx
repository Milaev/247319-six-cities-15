import BookmarkButton from '../../bookmark-button/bookmark-button';
import {convertToPercentage, capitalizeFirstLetter} from '../../../const/const';
import {useAppSelector, useAppDispatch} from '../../../hooks/store';
import {getAuthorizationStatus} from '../../../store/user-process/selectors';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {AuthorizationStatus, AppRoute} from '../../../const/const';
import {addFavorites} from '../../../store/api-actions';
import {OfferTypes} from '../../../types/offer';
import { getFavorites } from '../../../store/favorites-process/selectors';

type OfferMainInfoProps = {
  selectedOffer: OfferTypes;
}

export default function OfferMainInfo({selectedOffer}: OfferMainInfoProps): JSX.Element {
  const {isPremium, title, rating, type, bedrooms, maxAdults, price} = selectedOffer;
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const favorites = useAppSelector(getFavorites);
  const isOfferInFavorites = favorites.some((fav) => fav.id === selectedOffer.id);
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isOfferInFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFavoriteStatus(isOfferInFavorites);
  }, [isOfferInFavorites, selectedOffer.id]);

  const toggleFavorites = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    setFavoriteStatus(!favoriteStatus);
    dispatch(addFavorites({ offerData: selectedOffer, id: selectedOffer.id, isFavorite: !favoriteStatus}));
  };

  return (
    <>
      {isPremium ?
        <div className="offer__mark">
          <span>Premium</span>
        </div> : null}
      <div className="offer__name-wrapper">
        <h1 className="offer__name">
          {title}
        </h1>
        <BookmarkButton
          onToggleFavorites={toggleFavorites}
          status={favoriteStatus}
          element='offer'
        />
      </div>
      <div className="offer__rating rating">
        <div className="offer__stars rating__stars">
          <span style={{width: convertToPercentage(rating) }} />
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="offer__rating-value rating__value">{rating}</span>
      </div>
      <ul className="offer__features">
        <li className="offer__feature offer__feature--entire">
          {capitalizeFirstLetter(type)}
        </li>
        <li className="offer__feature offer__feature--bedrooms">
          {bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} {maxAdults === 1 ? 'adult' : 'adults'}
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}
