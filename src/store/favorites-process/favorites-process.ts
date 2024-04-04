import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const/const';
import {FavoritesProcess} from '../../types/state';
import {fetchFavorites, addFavorites} from '../api-actions';
import { OfferTypes } from '../../types/offer';

const initialState: FavoritesProcess = {
  favorites: [],
  favoritesIsLoading: false,
  favoritesPageError: false,
  addFavoriteIsLoading: false,
  addFavoriteError: false,
};

export const favoritesProcess = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers: {
    removeFavorites: (state) => {
      state.favorites = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesIsLoading = true;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesIsLoading = false;
        state.favoritesPageError = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoritesIsLoading = false;
        state.favorites = action.payload;
      })
      .addCase(addFavorites.pending, (state) => {
        state.addFavoriteIsLoading = true;
      })
      .addCase(addFavorites.rejected, (state) => {
        state.addFavoriteIsLoading = false;
        state.addFavoriteError = true;
      })
      .addCase(addFavorites.fulfilled, (state, action: PayloadAction<OfferTypes>) => {
        state.addFavoriteIsLoading = false;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        }
      });
  }
});

export const {removeFavorites} = favoritesProcess.actions;
