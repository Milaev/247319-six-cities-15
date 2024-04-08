import Reviews from '../reviews/reviews';
import ReviewsForm from '../../../components/offer/reviews-form/reviews-form';
import {AuthorizationStatus, MAX_COMMENTS_PER_OFFER, sortReviewsNewToOld} from '../../../const/const';
import {useAppSelector} from '../../../hooks/store';
import {getAuthorizationStatus} from '../../../store/user-process/selectors';
import {getReviews} from '../../../store/selected-offer-data/selectors';

export default function ReviewsList(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getReviews);
  const reviewsLength = reviews.length;
  const filteredCountReviews = sortReviewsNewToOld(reviews);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewsLength}</span>
      </h2>
      <ul className="reviews__list">
        {filteredCountReviews.slice(0, MAX_COMMENTS_PER_OFFER).map((review) => (
          <Reviews
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ? (<ReviewsForm />)
        : null}
    </section>
  );
}
