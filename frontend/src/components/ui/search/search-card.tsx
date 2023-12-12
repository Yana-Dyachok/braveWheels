import { Link } from 'react-router-dom';
import './_search-card.scss';

const SearchCard = (product:any) => {
  const { productLink, productImgUrl, productName, productCategory } = product.product;
  return (
    <div className='search-card'>
      <Link to={productLink} className="search-card__wrap flex">
        <img className="search-card__img" src={productImgUrl} alt=""  />
        <div className="search-card__content">
          <div className="search-card__title">
            {productName}
          </div>
          <div className="search-card__category">
            {productCategory}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchCard;