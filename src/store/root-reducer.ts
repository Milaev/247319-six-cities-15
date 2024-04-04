import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const/const';
import {appData} from './app-data/app-data';
import {locationProcess} from './location-process/location-process';
import {selectedOfferData} from './selected-offer-data/selected-offer-data';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.Location]: locationProcess.reducer,
  [NameSpace.SelectedOfferData]: selectedOfferData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
