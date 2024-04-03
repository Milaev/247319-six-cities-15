import {store} from '../store/index.js';
import {AuthorizationStatus} from '../const/const.js';
import {UserDataForState} from '../types/user-data';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserDataForState | null;
};
