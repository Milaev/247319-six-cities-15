import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import Layout from '../layout/layout';
import LoadingScreen from '../loading-screen/loading-screen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { checkOffersLoadingStatus, getErrorStatus } from '../../store/app-data/selectors';
import ErrorScreen from '../error-screen/error-screen';

export default function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(checkOffersLoadingStatus);
  const hasError = useAppSelector(getErrorStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <ErrorScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout />
            }
          >
            <Route
              index
              element={
                <MainPage />
              }
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesPage />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferPage />
              }
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
