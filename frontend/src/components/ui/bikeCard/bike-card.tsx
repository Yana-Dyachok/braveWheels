import './_bike-card.scss';
import { Link } from 'react-router-dom';

type BikeCardTypes = {
  id?: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productPageUrl: string;
};

const BikeCard = ({
  productName,
  productPrice,
  productImageUrl,
  productPageUrl,
}: BikeCardTypes) => {
  return (
    <>
      <article className='bike-card'>
        <Link className='bike-card__link' to={productPageUrl}>
          <div className='bike-card__content'>
            <h3 className='bike-card__title'>{productName}</h3>
            <p className='bike-card__price'>
              {productPrice.toLocaleString('uk-UA')} грн.
            </p>
          </div>
          <div className='bike-card__picture'>
            <img className='bike-card__img' src={productImageUrl} alt={'фото ' + productName} />
          </div>
        </Link>
      </article>
    </>
  );
};

export default BikeCard;
