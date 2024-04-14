import axios, {AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import {processErrorHandle} from './process-error-handle';
import {ROOT_URL} from '../const/const';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.CONFLICT]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = ROOT_URL;
const REQUEST_TIMEOUT = 5000;

//Создаём экземпляр класса AxiosInstance - функцию, которая создаёт объект настроек с базовым урл
export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  //перехватчик запроса позволяет перед отправкой каждого запроса выполнять действие по добавлению к конфигу заголовка x-token, содержащий токен авторизации
  //если бы перехватчика не было пришлось бы писать этот код в каждом месте, где мы юзаем axios отправляя запрос к серверу.
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
