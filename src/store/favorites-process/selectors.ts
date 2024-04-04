import { NameSpace } from '../../const/const';
import { OfferTypes } from '../../types/offer';
import { State } from '../../types/state';

export const getFavorites = (state: State): OfferTypes[] => state[NameSpace.Favorites].favorites;
export const checkFavoritesIsLoading = (state: State): boolean => state[NameSpace.Favorites].addFavoriteIsLoading;
