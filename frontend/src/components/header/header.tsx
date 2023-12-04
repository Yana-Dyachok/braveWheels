import Logo from 'components/ui/logo/logo';
import './_nav.scss';
import './_header.scss';
import { NavLink, Link } from 'react-router-dom';
import BtnAction from 'components/ui/btnAction/btnAction';

const Header = () => {
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
                Служба підтримки
              </a>
            </li>
          </ul>
        </nav>
        <div className='header__actions actions flex ai-center'>
          <BtnAction
            classNames='icon icon--search'
            title='Пошук'
            onClick={() => console.log('Пошук')}
          />
          <BtnAction
            classNames='icon icon--cart'
            title='Корзина товарів'
            onClick={() => console.log('Корзина')}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
