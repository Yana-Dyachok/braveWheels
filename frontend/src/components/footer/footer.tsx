import { Link } from 'react-router-dom';

import './_footer.scss';
import './_footer-nav.scss';
import Social from 'components/ui/social/social';
import Payments from 'components/ui/payments/payments';
import Address from 'components/ui/address/address';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__top flex jc-btw'>
          <div className='footer__nav footer-nav flex'>
            <div className='footer-nav__col'>
              <h3 className='footer-nav__title'>Велосипеди</h3>
              <ul className='footer-nav__menu'>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Види велосипедів
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Каталог
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Акції
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Пошук
                  </Link>
                </li>
              </ul>
            </div>
            <div className='footer-nav__col'>
              <h3 className='footer-nav__title'>Інформація</h3>
              <ul className='footer-nav__menu'>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Про нас
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>
            <div className='footer-nav__col'>
              <h3 className='footer-nav__title'>Клієнтам</h3>
              <ul className='footer-nav__menu'>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Доставка
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Умови оплати
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Гарантії
                  </Link>
                </li>
                <li className='footer-nav__item'>
                  <Link className='footer-nav__link' to='/'>
                    Повернення
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Address classNames='footer__address' />
        </div>
        <div className='footer__bottom flex jc-btw'>
          <Social classNames='footer__social flex'/>
          <Payments classNames='footer__payments flex' />
        </div>
        <div className='footer__copy'>&copy; BraveWheels</div>
      </div>
    </footer>
  );
};

export default Footer;
