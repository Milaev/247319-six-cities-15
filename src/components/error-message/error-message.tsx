import './error-message.css';
import {useAppSelector} from '../../hooks/store';
import {checkError} from '../../store/user-process/selectors';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(checkError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}
