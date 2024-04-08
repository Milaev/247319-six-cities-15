import LoginForm from '../../components/login-form/login-form';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {CITY_NAMES, CityName} from '../../const/city';
import {useAppDispatch} from '../../hooks/store';
import { changeLocation } from '../../store/location-process/location-process';


export default function LoginPage(): JSX.Element {
  const randomIndex = Math.floor(Math.random() * CITY_NAMES.length);
  const randomCityName: CityName = CITY_NAMES[randomIndex] as CityName;
  const dispatch = useAppDispatch();

  const handleLocationChange = () => {
    dispatch(changeLocation(randomCityName));
  };

  return (
    <main className="page__main page__main--login">
      <Helmet>
        <title>Log in to the app! 6 cities</title>
      </Helmet>
      <div className="page__login-container container">
        <LoginForm />
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <Link
              to='/'
              className="locations__item-link"
              onClick={handleLocationChange}
            >
              <span>{randomCityName}</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
