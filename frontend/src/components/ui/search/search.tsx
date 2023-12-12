import { useState } from 'react';

import Button from '../btn/btn';

import './_search.scss';
import './_search-form.scss';
import './_search-history.scss';
import './_search-card.scss';

import searchData from './searchMockData';
import SearchCard from './search-card';

type SearchTypes = {
  classNames?: string;
};

const Search = ({ classNames }: SearchTypes) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredData = searchData?.filter((event) =>
    event.productName.toLowerCase().includes(searchValue.toLowerCase()),
  );

  const newClassName = classNames ? `search ${classNames}` : 'search';

  return (
    <div className={newClassName}>
      <div className='container search__inner'>
        <form action='' className='search__form search-form'>
          <label className='search-form__label' htmlFor='search-field'>
            <span className='sr-only'>Введіть свій запит для пошуку</span>
          </label>
          <div className='search-form__row flex'>
            <input
              id='search-field'
              className='search-form__input input-field'
              type='search'
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button
              classNames='search-form__btn'
              onClick={() => alert(`Тут планується перехід на сторінку пошуку з передачею отакого параметра - ${searchValue}`)}
            >
              Знайти
            </Button>
          </div>
        </form>

        <div className='search__history search-history'>
          {searchValue.trim() === '' ? (
            <div className='search-history__empty'>Введіть пошуковий запит</div>
          ) : filteredData.length > 0 ? (
            <>
              <p className='search-history__title'>Знайдено за вашим запитом</p>
              <ul className='search-history__list'>
                {filteredData.map((product, index) => (
                  <li
                    className='search-list__item'
                    key={index + product.productLink}
                  >
                    <SearchCard product={product} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className='search-history__empty'>Пошук не дав результату</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
