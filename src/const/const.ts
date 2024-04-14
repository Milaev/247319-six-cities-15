import dayjs from 'dayjs';
import { ReviewTypes } from '../types/review';

export const URL_MARKER_DEFAULT = '../markup/img/pin.svg';
export const URL_MARKER_CURRENT = '../markup/img/pin-active.svg';
export const ROOT_URL = 'https://15.design.htmlacademy.pro/six-cities';
const DATE_FORMAT_IN_REVIEW = 'YY-MM-DD';
const DATE_FORMAT_IN_REVIEW_TEXT = 'MMMM YYYY';
const PLACE_RATING_RATIO = 20;
export const TIMEOUT_SHOW_ERROR = 2000;
export const MAX_IMAGES_PER_OFFER = 6;
export const MAX_COMMENTS_PER_OFFER = 10;
export const NEAR_PLACES_FOR_SHOW = 3;
export const ERROR_ADD_FAVORITES = 'Error updating data on the server, try again later';
export const ERROR_SEND_REVIEW = 'Error send review to the server, try again later';

export const SYMBOLS_IN_REVIEW = {
  MIN: 50,
  MAX: 300,
};

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
  Location = 'LOCATION',
  AppData = 'APP_DATA',
  SelectedOfferData = 'SELECTED_OFFER_DATA',
  User = 'USER',
  Favorites = 'FAVORITES',
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
  const percentage = Math.round(rating) * PLACE_RATING_RATIO;
  return `${percentage}%`;
}

function sortReviewsNewToOld(array: ReviewTypes[]): ReviewTypes[] {
  return array.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export {
  humanizeDateTime,
  humanizeReviewTime,
  capitalizeFirstLetter,
  convertToPercentage,
  sortReviewsNewToOld,
};
