import { NavLink } from 'react-router-dom';

type NavTabProps = {
  city: string;
  isActive: boolean;
  onNavTabClick: () => void;
}

export default function NavTab({ city, isActive, onNavTabClick }: NavTabProps): JSX.Element {

  return (
    <NavLink
      to='/'
      className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
      onClick={onNavTabClick}
    >
      <span>{city}</span>
    </NavLink>
  );
}
