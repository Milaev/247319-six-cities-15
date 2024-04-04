import {createSlice} from '@reduxjs/toolkit';
import {AppData} from '../../types/state';
import {NameSpace} from '../../const/const';
import {fetchOffers} from '../api-actions';

const initialState: AppData = {
  offers: [],
  isOffersDataLoading: false,
  hasError: false,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.isOffersDataLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.isOffersDataLoading = false;
        state.hasError = true;
      });
  }
});
