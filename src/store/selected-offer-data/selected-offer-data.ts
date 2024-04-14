import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {SelectedOfferData} from '../../types/state';
import {NameSpace} from '../../const/const';
import {fetchNearPlaces, fetchOffer, fetchReviews, sendReview} from '../api-actions';
import {ReviewTypes} from '../../types/review';

const initialState: SelectedOfferData = {
  selectedOffer: null,
  isOfferExist: false,
  nearPlaces: [],
  reviews: [],
  reviewsIsLoading: false,
  errorSendReview: false,
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
      .addCase(sendReview.pending, (state) => {
        state.reviewsIsLoading = true;
      })
      .addCase(sendReview.rejected, (state) => {
        state.reviewsIsLoading = false;
        state.errorSendReview = true;
      })
      .addCase(sendReview.fulfilled, (state) => {
        state.reviewsIsLoading = false;
        state.errorSendReview = false;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewsIsLoading = false;
        state.reviews = action.payload;
      });
  }
});

export const {addReview} = selectedOfferData.actions;
