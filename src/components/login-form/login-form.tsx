import { FormEvent, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { loginAction } from '../../store/api-actions';
import { AuthorizationStatus, AppRoute } from '../../const/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { useNavigate } from 'react-router-dom';

const validateEmail = (email: string): boolean =>
  /^[A-Z0-9.%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(email);

const validatePassword = (password: string): boolean =>
  /^[A-za-z0-9]+[A-za-z0-9_]{1,}$/.test(password);

export default function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current === null || passwordRef.current === null) {
      return;
    }

    if (validateEmail(loginRef.current.value) && validatePassword(passwordRef.current.value)) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action=""
        onSubmit={handleSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            ref={loginRef}
            className="login__input form__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            ref={passwordRef}
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="login__submit form__submit button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
}
