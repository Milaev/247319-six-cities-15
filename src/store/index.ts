import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-reducer';
import {createAPI} from '../services/api';

//сохраняем настроенный экземпляр axios в переменную
const api = createAPI();
//подключили мидлварю санки, чтобы через параметр экстрааргумент всегда иметь возможность обращаться к апи для вызова асинхронных действий!
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
