import dayjs from 'dayjs';

export const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
export const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';
export const ROOT_URL = 'https://15.design.htmlacademy.pro/six-cities';
const DATE_FORMAT_IN_REVIEW = 'YY-MM-DD';
const DATE_FORMAT_IN_REVIEW_TEXT = 'MMMM YYYY';
const PLACE_RATING_RATIO = 20;
export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

function humanizeDateTime(date?: string): string {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW.toUpperCase()) : '';
}

function humanizeReviewTime(date?: string): string {
  return date ? dayjs(date).format(DATE_FORMAT_IN_REVIEW_TEXT.toUpperCase()) : '';
}

function capitalizeFirstLetter(text: string | undefined | null): string {
  if (text === undefined || text === null) {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function convertToPercentage(rating: number | undefined | null): string {
  if (rating === undefined || rating === null) {
    return '';
  }
  return `${rating * PLACE_RATING_RATIO}%`;
}

export {
  humanizeDateTime,
  humanizeReviewTime,
  capitalizeFirstLetter,
  convertToPercentage,
};
