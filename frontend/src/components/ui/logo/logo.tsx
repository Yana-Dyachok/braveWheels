import logoImg from '../../../assets/images/logo.webp';
import './_logo.scss';

const Logo = () => {
  return (
    <img
      className='logo-img'
      src={logoImg}
      alt='logo'
      width='220'
      height='40'
    />
  );
};

export default Logo;
