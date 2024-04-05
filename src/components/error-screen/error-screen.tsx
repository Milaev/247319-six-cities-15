import './error-screen.css';
import {useAppDispatch} from '../../hooks/store';
import {fetchOffers} from '../../store/api-actions';

export default function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <div className="error">
      <h2>Error</h2>
      <p>Sorry, but the offers did not load.</p>
      <button
        onClick={() => {
          dispatch(fetchOffers());
        }}
        className="reviews__submit form__submit button"
        type="button"
      >
        Try again
      </button>
    </div>
  );
}
