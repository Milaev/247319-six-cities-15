import {AuthorizationStatus, NameSpace} from '../../const/const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const checkError = (state: State): (string | null) => state[NameSpace.User].error;
