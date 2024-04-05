import {useState} from 'react';

type SortingFormProps = {
  onSortingChange: (type: string) => void;
}

type SortingOptions = {
  [key: string]: string;
}

const sortingOptions: SortingOptions = {
  popular: 'Popular',
  priceLowToHigh: 'Price: low to high',
  priceHighToLow: 'Price: high to low',
  topRatedFirst: 'Top rated first',
};

export default function SortingForm({onSortingChange}: SortingFormProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSorting, setActiveSorting] = useState<string>('popular');

  const handleSortingChange = (type: string) => {
    onSortingChange(type);
    setActiveSorting(type);
    setIsOpen(false);
  };

  const optionsToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={optionsToggle}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {sortingOptions[activeSorting]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.entries(sortingOptions).map(([key, value]) => (
          <li
            key={key}
            className={`places__option ${activeSorting === key ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortingChange(key)}
          >
            {value}
          </li>
        ))}
      </ul>
    </form>
  );
}
