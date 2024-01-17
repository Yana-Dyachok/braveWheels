import './_bike-card.scss';
import { Link } from 'react-router-dom';

type BikeCardTypes = {
  id?: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  productPageUrl: string;
  amount: number;
  discount: number;
  humanHeight: number[];
  wheelLength: number;
};

const BikeCard = ({
  productName,
  productPrice,
  productImageUrl,
  productPageUrl,
  amount,
  discount,
  humanHeight,
  wheelLength,
}: BikeCardTypes) => {
  const getDiscountPrice = () => {
    return productPrice - Math.floor((productPrice * discount) / 100);
  };
  return (
    <>
      <article className='bike-card'>
        <Link className='bike-card__link' to={productPageUrl}>
          <div className='bike-card__content'>
            <h3 className='bike-card__title'>{productName}</h3>
            <div className='bike-card__inner'>
              <div className='bike-card__prices'>
                {discount > 0 ? (
                  <p className='bike-card__price-before'>
                    {productPrice.toLocaleString('uk-UA')} грн
                  </p>
                ) : null}
                <p className='bike-card__price'>
                  {discount > 0
                    ? getDiscountPrice().toLocaleString('uk-UA')
                    : productPrice.toLocaleString('uk-UA')} грн
                </p>
              </div>
              {amount === 0 ? (
                <button
                  className='bike-card__btn  icon icon--cart-unselected'
                  type='button'
                  // onClick={() => {
                  //     addOrder(bike);
                  // }}
                ></button>
              ) : (
                <button
                  className='bike-card__btn bike-card__btn--selected icon icon--cart-selected'
                  type='button'
                  // onClick={handleOpenCart}
                ></button>
              )}
            </div>
          </div>
          <div className='bike-card__picture'>
            <img
              className='bike-card__img'
              src={productImageUrl}
              alt={'фото ' + productName}
            />
          </div>
        </Link>
      </article>
    </>
  );
};

export default BikeCard;
