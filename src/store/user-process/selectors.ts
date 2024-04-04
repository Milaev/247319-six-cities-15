import {AuthorizationStatus, NameSpace} from '../../const/const';
import {State} from '../../types/state';
import {UserDataForState} from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const checkError = (state: State): (string | null) => state[NameSpace.User].error;
export const getUserData = (state: State): (UserDataForState | null) => state[NameSpace.User].userData;
