import { CityName } from '../../const/city';
import { NameSpace } from '../../const/const';
import { State } from '../../types/state';

export const getCurrentLocation = (state: State): CityName => state[NameSpace.Location].city;
