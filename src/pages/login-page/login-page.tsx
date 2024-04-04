import LoginForm from '../../components/login-form/login-form';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/store';
import {getCurrentLocation} from '../../store/location-process/selectors';

export default function LoginPage(): JSX.Element {
  const city = useAppSelector(getCurrentLocation);

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Log in to the app! 6 cities</title>
      </Helmet>
      <div className="page__login-container container">
        <LoginForm />
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link to='/' className="locations__item-link">
              <span>{city}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
