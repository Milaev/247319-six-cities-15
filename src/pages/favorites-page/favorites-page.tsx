import FavoritesList from '../../components/favorites-list/favorites-list';
import FavEmpty from '../../components/fav-empty/fav-empty';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/store';
import {getOffers} from '../../store/app-data/selectors';

export default function FavoritesPage(): JSX.Element {
  //тут потом всё равно из стейта надо будет избранные доставать
  //пока временно, чтобы без ошибок было getOffers = результат изюранных 0 сейчас
  const offers = useAppSelector(getOffers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  const favoritesEmptyPage = favoritesOffers.length === 0;
  const pageTitle = favoritesEmptyPage ? 'There are no favorites places' : 'Favorites. 6 cities';

  return (
    <main
      className={`page__main page__main--favorites ${favoritesEmptyPage ? 'page__main--favorites-empty' : ''}`}
    >
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="page__favorites-container container">
        <section
          className={`favorites ${favoritesEmptyPage ? 'favorites--empty' : ''}`}
        >
          {favoritesEmptyPage ? (
            <FavEmpty />
          ) : (
            <>
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList favoriteOffers={favoritesOffers} />
            </>
          )}
        </section>
      </div>
    </main>
  );
}
