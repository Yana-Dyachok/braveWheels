import { useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';

import BtnAction from 'components/ui/btnAction/btnAction';
import Search from 'components/ui/search/search';
import Overlay from 'components/ui/overlay/overlay';

import Logo from 'components/ui/logo/logo';

import './_nav.scss';
import './_header.scss';


const Header = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  
  const handleSearchForm = () => {
    console.log('Відкриваємо...')
    setIsSearchVisible(prevState => !prevState)
  }

  const handleSearchClose = () => {
    setIsSearchVisible(false);
  }

  return (
    <header className='header'>
      <div className='container header__inner'>
        <Link className='nav__link' to='/'>
          <Logo />
        </Link>
        <nav className='nav header__nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <NavLink className={({ isActive }) =>
                isActive ? "nav__link current" : "nav__link"
                } to='/catalog'>
                Каталог
              </NavLink>
            </li>
            <li className='nav__item'>
              <NavLink className={({ isActive }) =>
                isActive ? "nav__link current" : "nav__link"
                } to='/promo'>
                Акції
              </NavLink>
            </li>
            <li className='nav__item'>
              <a className='nav__link' href='#'>
               Підтримка
              </a>
            </li>
          </ul>
        </nav>
        <div className='header__actions actions flex ai-center'>
          <BtnAction
            classNames='icon icon--search'
            title='Пошук'
            onClick={() => handleSearchForm()}
          />
          <BtnAction
            classNames='icon icon--cart'
            title='Кошик'
            onClick={() => console.log('Кошик')}
          />
        </div>
      </div>
      {/* {isSearchVisible && 
        <Overlay isOpen={isSearchVisible} onClose={() => setIsSearchVisible(false)}>
          <Search classNames='header__search'/>
        </Overlay>
      } */}
      {isSearchVisible && (
        <Overlay isShow={isSearchVisible} onClose={handleSearchClose}>
          <Search classNames='header__search' />
        </Overlay>
      )}
    </header>
  );
};

export default Header;
