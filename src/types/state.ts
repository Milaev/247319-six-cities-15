import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const/const.js';
import {UserDataForState} from '../types/user-data';
import {OfferTypes} from '../types/offer';
import {ReviewTypes} from '../types/review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserDataForState | null;
};

export type AppData = {
  offers: OfferTypes[];
  error: string | null;
  isOffersDataLoading: boolean;
  activeOffer: OfferTypes | null;
  nearPlaces: OfferTypes[];
  reviews: ReviewTypes[];
  isOfferExist: boolean;
}
