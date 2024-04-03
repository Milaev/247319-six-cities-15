import {createAction} from '@reduxjs/toolkit';
import {CityName} from '../const/city';
import {OfferTypes} from '../types/offer';
import {ReviewTypes} from '../types/review';

export const changeLocation = createAction<CityName>('location/setCityName');
export const setError = createAction<string | null>('data/setError');
export const setActiveOffer = createAction<OfferTypes>('data/setActiveOffer');
export const loadNearPlaces = createAction<OfferTypes[]>('data/loadNearPlaces');
export const loadReviews = createAction<ReviewTypes[]>('data/loadReviews');
export const setOfferNotExist = createAction<boolean>('data/setOfferNotExist');
export const addReview = createAction<ReviewTypes>('data/addReview');
