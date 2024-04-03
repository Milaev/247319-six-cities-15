import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const/const';
import {
  loadNearPlaces,
  loadOffers,
  loadReviews,
  setActiveOffer,
  setError,
  setOffersDataLoadingStatus,
  setOfferNotExist,
  addReview,
} from './action';
import { OfferTypes } from '../types/offer';
import { AppDispatch, State } from '../types/state';
import { dropToken, saveToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData, UserDataForState } from '../types/user-data';
import { store } from '.';
import { ReviewTypes, CommentTypes } from '../types/review';
import { addUserData, removeUserData } from './user-process/user-process';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<OfferTypes[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    try {
      dispatch(setOfferNotExist(false));
      const { data } = await api.get<OfferTypes>(`${APIRoute.Offers}/${offerId}`);
      dispatch(setActiveOffer(data));
    } catch (err) {
      dispatch(setOfferNotExist(true));
    }
  }
);

export const fetchNearPlaces = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferTypes[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    dispatch(loadNearPlaces(data));
  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewTypes[]>(`${APIRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
    const storedUserData: string | null = localStorage.getItem('userData') || '';
    if (storedUserData !== null) {
      const userData: UserDataForState = JSON.parse(storedUserData) as UserDataForState;
      const { name, email, avatarUrl, isPro } = userData;
      dispatch(addUserData({ name, email, avatarUrl, isPro }));
    }
  },
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
    localStorage.setItem('userData', JSON.stringify({ name, email, avatarUrl, isPro }));
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
    localStorage.removeItem('userData');
  },
);

export const sendReview = createAsyncThunk<void, { reviewData: CommentTypes; offerId: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/sendReview',
  async ({ reviewData, offerId }, { dispatch, extra: api }) => {
    const { data } = await api.post<ReviewTypes>(`${APIRoute.Comments}/${offerId}`, reviewData);
    dispatch(addReview(data));
  },
);
