import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const/const.js';
import {CityName} from '../const/city';
import {UserDataForState} from '../types/user-data';
import {OfferTypes} from '../types/offer';
import {ReviewTypes} from '../types/review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  city: CityName;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserDataForState | null;
  error: string | null;
};

export type AppData = {
  offers: OfferTypes[];
  isOffersDataLoading: boolean;
  hasError: boolean;
}

export type SelectedOfferData = {
  selectedOffer: OfferTypes | null;
  nearPlaces: OfferTypes[];
  reviews: ReviewTypes[];
  reviewsIsLoading: boolean;
  isOfferExist: boolean;
  errorSendReview: boolean;
}

export type FavoritesProcess = {
  favorites: OfferTypes[];
  favoritesIsLoading: boolean;
  favoritesPageError: boolean;
  addFavoriteIsLoading: boolean;
  addFavoriteError: boolean;
}
