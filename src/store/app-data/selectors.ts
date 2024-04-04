import {NameSpace} from '../../const/const';
import {OfferTypes} from '../../types/offer';
import {State} from '../../types/state';

export const getOffers = (state: State): OfferTypes[] => state[NameSpace.AppData].offers;
export const checkOffersLoadingStatus = (state: State): boolean => state[NameSpace.AppData].isOffersDataLoading;
