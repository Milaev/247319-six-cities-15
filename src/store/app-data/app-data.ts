import { createSlice } from '@reduxjs/toolkit';
import { AppData } from '../../types/state';
import { NameSpace } from '../../const/const';
import { fetchOffers } from '../api-actions';

const initialState: AppData = {
  offers: [],
  error: null,
  isOffersDataLoading: false,
  activeOffer: null,
  nearPlaces: [],
  reviews: [],
  isOfferExist: false,
};

export const appData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      });
  }
});
