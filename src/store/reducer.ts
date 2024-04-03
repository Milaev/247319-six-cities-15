import {createReducer} from '@reduxjs/toolkit';
import {OfferTypes} from '../types/offer';
import {
  changeLocation,
  loadNearPlaces,
  loadReviews,
  setActiveOffer,
  setError,
  setOfferNotExist,
  addReview,
} from './action';
import {CITIES, CityName} from '../const/city';
import { ReviewTypes } from '../types/review';

type InitialStateType = {
  city: CityName;
  error: string | null;
  activeOffer: OfferTypes | null;
  nearPlaces: OfferTypes[];
  reviews: ReviewTypes[];
  isOfferExist: boolean;
}

const initialState: InitialStateType = {
  city: CITIES[0].name,
  error: null,
  activeOffer: null,
  nearPlaces: [],
  reviews: [],
  isOfferExist: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(loadNearPlaces, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOfferNotExist, (state, action) => {
      state.isOfferExist = action.payload;
    })
    .addCase(addReview, (state, action) => {
      state.reviews.push(action.payload);
    });
});

export { reducer };
