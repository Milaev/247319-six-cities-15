import BookmarkButton from '../bookmark-button/bookmark-button';
import {Link, useNavigate} from 'react-router-dom';
import {OfferTypes} from '../../types/offer';
import {AppRoute, AuthorizationStatus, capitalizeFirstLetter, convertToPercentage} from '../../const/const';
import {useAppDispatch, useAppSelector} from '../../hooks/store';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {addFavorites} from '../../store/api-actions';
import {useState} from 'react';

type PlaceCardProps = {
  offer: OfferTypes;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  isActive?: boolean;
  classNameItem: string;
}

export default function PlaceCard({offer, onMouseOver, onMouseOut, isActive, classNameItem}: PlaceCardProps): JSX.Element {
  const {id, title, type, price, previewImage, rating, isPremium, isFavorite} = offer;
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(isFavorite);

  const favoritesToggle = () => {
    if (authStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }
    setFavoriteStatus(!favoriteStatus);
    dispatch(addFavorites({ offerData: offer, id: offer.id, isFavorite: !favoriteStatus}));
  };

  return (
    <article
      className={`${classNameItem} place-card ${isActive ? 'place-card--active' : ''}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            favoritesToggle={favoritesToggle}
            status={favoriteStatus}
            element='place-card'
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: convertToPercentage(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article >
  );
}
