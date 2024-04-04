import {store} from './index';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {APIRoute, TIMEOUT_SHOW_ERROR} from '../const/const';
import {dropToken, saveToken} from '../services/token';
import {addUserData, removeUserData, setError} from './user-process/user-process';
import {addReview} from './selected-offer-data/selected-offer-data';
import {AppDispatch, State} from '../types/state';
import {OfferTypes} from '../types/offer';
import {AuthData} from '../types/auth-data';
import {UserData, UserDataForState} from '../types/user-data';
import {ReviewTypes, CommentTypes} from '../types/review';

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
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
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OfferTypes[]>(APIRoute.Offers);
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
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferTypes>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<OfferTypes[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearPlaces',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferTypes[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  },
);

export const fetchReviews = createAsyncThunk<ReviewTypes[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewTypes[]>(`${APIRoute.Comments}/${offerId}`);
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
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
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: { token, name, avatarUrl, isPro} } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    localStorage.setItem('userData', JSON.stringify({name, email, avatarUrl, isPro}));
    dispatch(addUserData({name, email, avatarUrl, isPro}));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(removeUserData());
    localStorage.removeItem('userData');
  },
);

export const sendReview = createAsyncThunk<void, {reviewData: CommentTypes; offerId: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'reviews/sendReview',
  async ({reviewData, offerId}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewTypes>(`${APIRoute.Comments}/${offerId}`, reviewData);
    dispatch(addReview(data));
  },
);
