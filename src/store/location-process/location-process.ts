import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {CITIES, CityName} from '../../const/city';
import {InitialStateType} from '../../types/state';
import {NameSpace} from '../../const/const';

const initialState: InitialStateType = {
  city: CITIES[0].name,
};

export const locationProcess = createSlice({
  name: NameSpace.Location,
  initialState,
  reducers: {
    changeLocation: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    }
  }
});

export const {changeLocation} = locationProcess.actions;
