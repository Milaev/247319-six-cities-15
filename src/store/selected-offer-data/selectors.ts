import { NameSpace } from '../../const/const';
import { OfferTypes } from '../../types/offer';
import { ReviewTypes } from '../../types/review';
import { State } from '../../types/state';

export const getSelectedOffer = (state: State): OfferTypes | null => state[NameSpace.SelectedOfferData].selectedOffer;
export const getNearPlaces = (state: State): OfferTypes[] => state[NameSpace.SelectedOfferData].nearPlaces;
export const checkExistence = (state: State): boolean => state[NameSpace.SelectedOfferData].isOfferExist;
export const getReviews = (state: State): ReviewTypes[] => state[NameSpace.SelectedOfferData].reviews;
export const checkReviewsIsLoading = (state: State): boolean => state[NameSpace.SelectedOfferData].reviewsIsLoading;
