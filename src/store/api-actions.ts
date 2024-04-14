import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const/const';
import { dropToken, saveToken } from '../services/token';
import { addUserData, removeUserData, setError } from './user-process/user-process';
import { addReview } from './selected-offer-data/selected-offer-data';
import { AppDispatch, State } from '../types/state';
import { OfferTypes } from '../types/offer';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewTypes, CommentTypes } from '../types/review';
import { removeFavorites } from './favorites-process/favorites-process';

export const clearErrorAction = createAsyncThunk<void, void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/clearError',
  (_arg, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffers = createAsyncThunk<OfferTypes[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferTypes[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOffer = createAsyncThunk<OfferTypes, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferTypes>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<OfferTypes[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferTypes[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<ReviewTypes[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ReviewTypes[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: { name, email, avatarUrl, isPro } } = await api.get<UserData>(APIRoute.Login);
      dispatch(addUserData({ name, email, avatarUrl, isPro }));
    } catch (error) {
      throw new Error();
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token, name, avatarUrl, isPro } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(addUserData({ name, email, avatarUrl, isPro }));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(removeUserData());
    dispatch(removeFavorites());
  },
);

export const sendReview = createAsyncThunk<boolean, { reviewData: CommentTypes; offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/sendReview',
  async ({ reviewData, offerId }, { dispatch, extra: api }) => {
    try {
      const { data } = await api.post<ReviewTypes>(`${APIRoute.Comments}/${offerId}`, reviewData);
      dispatch(addReview(data));
      return true;
    } catch (error) {
      return false;
    }
  },
);

export const fetchFavorites = createAsyncThunk<OfferTypes[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'favorites/fetchFavorites',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferTypes[]>(`${APIRoute.Favorite}`);
    return data;
  }
);

export const addFavorites = createAsyncThunk<OfferTypes, {
  offerData: OfferTypes;
  id: string;
  isFavorite: boolean;
},
  {
    extra: AxiosInstance;
  }>(
    'favorites/addFavorites',
    async ({ offerData, id, isFavorite }, { extra: api }) => {
      const status = Number(isFavorite);
      const { data } = await api.post<OfferTypes>(`${APIRoute.Favorite}/${id}/${status}`, offerData);
      return data;
    },
  );
