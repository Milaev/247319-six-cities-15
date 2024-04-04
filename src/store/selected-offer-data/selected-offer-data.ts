import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {SelectedOfferData} from '../../types/state';
import {NameSpace} from '../../const/const';
import {fetchNearPlaces, fetchOffer, fetchReviews} from '../api-actions';
import {ReviewTypes} from '../../types/review';

const initialState: SelectedOfferData = {
  selectedOffer: null,
  isOfferExist: false,
  nearPlaces: [],
  reviews: [],
};

export const selectedOfferData = createSlice({
  name: NameSpace.SelectedOfferData,
  initialState,
  reducers: {
    addReview: (state, action: PayloadAction<ReviewTypes>) => {
      state.reviews.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.isOfferExist = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.selectedOffer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.isOfferExist = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});

export const {addReview} = selectedOfferData.actions;
