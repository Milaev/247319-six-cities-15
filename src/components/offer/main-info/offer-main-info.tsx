import BookmarkButton from '../../bookmark-button/bookmark-button';
import {convertToPercentage, capitalizeFirstLetter} from '../../../const/const';
import {useAppSelector, useAppDispatch} from '../../../hooks/store';
import {getAuthorizationStatus} from '../../../store/user-process/selectors';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {AuthorizationStatus, AppRoute} from '../../../const/const';
import {addFavorites} from '../../../store/api-actions';
import {OfferTypes} from '../../../types/offer';

type OfferMainInfoProps = {
  selectedOffer: OfferTypes;
}

export default function OfferMainInfo({selectedOffer}: OfferMainInfoProps): JSX.Element {
  const {isPremium, title, isFavorite, rating, type, bedrooms, maxAdults, price} = selectedOffer;
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);
  const dispatch = useAppDispatch();

  const favoritesToggle = () => {
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
          favoritesToggle={favoritesToggle}
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
          {bedrooms} Bedrooms
        </li>
        <li className="offer__feature offer__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="offer__price">
        <b className="offer__price-value">€{price}</b>
        <span className="offer__price-text">&nbsp;night</span>
      </div>
    </>
  );
}
