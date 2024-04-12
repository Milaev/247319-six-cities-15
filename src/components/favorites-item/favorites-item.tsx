import BookmarkButton from '../bookmark-button/bookmark-button';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/store';
import {addFavorites} from '../../store/api-actions';
import {convertToPercentage, capitalizeFirstLetter} from '../../const/const';
import {OfferTypes} from '../../types/offer';

type FavoritesItemProps = {
  favoriteOffer: OfferTypes;
}

export default function FavoritesItem({favoriteOffer}: FavoritesItemProps): JSX.Element {
  const {id, title, type, price, previewImage, rating, isPremium} = favoriteOffer;

  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(favoriteOffer.isFavorite);
  const dispatch = useAppDispatch();

  const toggleFavorites = () => {
    setFavoriteStatus(!favoriteStatus);
    dispatch(addFavorites({ offerData: favoriteOffer, id: favoriteOffer.id, isFavorite: !favoriteStatus}));
  };

  return (
    <article className="favorites__card place-card">
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={150}
            height={110}
            alt={title}
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <BookmarkButton
            onToggleFavorites={toggleFavorites}
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
    </article>
  );
}
