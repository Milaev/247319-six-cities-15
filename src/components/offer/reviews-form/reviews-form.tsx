import {useState, ChangeEvent, Fragment, FormEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/store';
import {useParams} from 'react-router-dom';
import {sendReview} from '../../../store/api-actions';
import {CommentTypes} from '../../../types/review';
import { checkReviewsIsLoading} from '../../../store/selected-offer-data/selectors';
import { ERROR_SEND_REVIEW, SYMBOLS_IN_REVIEW } from '../../../const/const';
import { processErrorHandle } from '../../../services/process-error-handle';

const rating = [
  { value: 5, label: 'perfect' },
  { value: 4, label: 'good' },
  { value: 3, label: 'not bad' },
  { value: 2, label: 'badly' },
  { value: 1, label: 'terribly' },
];

export default function ReviewsForm(): JSX.Element {
  const params = useParams();
  const offerId = params.id || '';

  const [formData, setFormData] = useState({
    rating: 0,
    textReview: '',
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      rating: Number(value)
    }));
  };

  const handleTextReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const dispatch = useAppDispatch();

  const resetForm = () => {
    setFormData({
      rating: 0,
      textReview: '',
    });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const reviewData: CommentTypes = {
      comment: formData.textReview,
      rating: Number(formData.rating),
    };
    dispatch(sendReview({ reviewData, offerId })).then(({ payload }) => {
      if (payload) {
        resetForm();
      } else {
        processErrorHandle(ERROR_SEND_REVIEW);
      }
    });
  };

  const reviewsIsLoading = useAppSelector(checkReviewsIsLoading);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({ value, label }) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={formData.rating === value}
              onChange={handleRatingChange}
              disabled={reviewsIsLoading}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={label}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="textReview"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.textReview}
        onChange={handleTextReviewChange}
        disabled={reviewsIsLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.textReview.length < SYMBOLS_IN_REVIEW.MIN || formData.textReview.length > SYMBOLS_IN_REVIEW.MAX || formData.rating === 0 || reviewsIsLoading}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
