import Button from '../btn/btn';

import './_search.scss';

const Search = () => {
  return (
    <div className='search'>
      <form action='' className='search__form search-form'>
        <label className='search-form__label' htmlFor='search-field'>
          <span className='sr-only'>Введіть свій запит для пошуку</span>
        </label>
        <div className='search-form__row flex'>
          <input
            id='search-field'
            className='search-form__input input-field'
            type='search'
            onChange={() => console.log('Search')}
          />
          <Button
            classNames='search-form__btn'
            onClick={() => console.log('Шукаю')}
          >
            Знайти
          </Button>
        </div>
      </form>

      <div className='search__history search-history'>
        <p className='search-history__title'>Історія пошуку</p>
        <ul className='search-list'>
          <li className='search-list__item'>Текст 1</li>
          <li className='search-list__item'>Текст 2</li>
          <li className='search-list__item'>Текст 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
