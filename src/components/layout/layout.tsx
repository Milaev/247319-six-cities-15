import {Outlet, Link, useLocation} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../mocks/authorization-status';
import Logo from '../logo/logo';

type RouteConfig = {
  rootClassName?: string;
  linkClassName?: string;
  needRenderUserInfo?: boolean;
  needRenderFooter?: boolean;
}

const RouteConfigMap: Record<string, RouteConfig> = {
  [AppRoute.Root]: {
    rootClassName: ' page--gray page--main',
    linkClassName: ' header__logo-link--active',
  },
  [AppRoute.Login]: {
    rootClassName: ' page--gray page--login',
    needRenderUserInfo: false
  },
  [AppRoute.Favorites]: {
    needRenderFooter: true
  },
  [AppRoute.Offer]: {

  }
};

export default function Layout() {
  const {pathname} = useLocation();
  const routeConfig: RouteConfig = RouteConfigMap[pathname] || {};
  const {rootClassName = '', linkClassName = '', needRenderUserInfo = true, needRenderFooter = false} = routeConfig;
  const authorizationStatus = getAuthorizationStatus();

  return (
    <div className={`page${rootClassName}`}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Root} className={`header__logo-link ${linkClassName}`}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            {needRenderUserInfo ? (
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link
                      to={AppRoute.Favorites}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      {authorizationStatus === AuthorizationStatus.Auth ? (
                        <>
                          <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                          <span className="header__favorite-count">3</span>
                        </>
                      ) : <span className="header__login">Sign in</span>}
                    </Link>
                  </li>
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <li className="header__nav-item">
                      <Link to='/' className="header__nav-link">
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
      {needRenderFooter ? (
        <footer className="footer">
          <Logo />
        </footer>
      ) : null}
    </div>
  );
}
