import {useAppSelector} from '../../hooks/store';
import {checkFavoritesIsLoading} from '../../store/favorites-process/selectors';

type BookmarkButtonProps = {
  status: boolean;
  element: string;
  onToggleFavorites: () => void;
}

export default function BookmarkButton({status, element, onToggleFavorites}: BookmarkButtonProps): JSX.Element {
  const isLoading = useAppSelector(checkFavoritesIsLoading);

  const isActive = status ? `${element}__bookmark-button button ${element}__bookmark-button--active` : `${element}__bookmark-button button`;

  return (
    <button
      onClick={onToggleFavorites}
      className={isActive}
      type="button"
      disabled={isLoading}
    >
      <svg
        className={`${element}__bookmark-icon`}
        width={element === 'offer' ? '31' : '18'}
        height={element === 'offer' ? '33' : '19'}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{status ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
