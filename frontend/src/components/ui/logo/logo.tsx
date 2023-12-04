import logoImg from '../../../assets/images/logo.webp';
import './_logo.scss';

const Logo = () => {
  return (
    <img
      className='logo-img'
      src={logoImg}
      alt='logo'
      width='172'
      height='87'
    />
  );
};

export default Logo;
