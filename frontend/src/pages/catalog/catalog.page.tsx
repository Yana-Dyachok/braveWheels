import { Helmet } from 'react-helmet';

import Filters from 'components/filters/filters';
import BikeCard from 'components/ui/bikeCard/bike-card';
import BikeSlider from 'components/bike-slider/bike-slider';

// import ReactPaginate from 'react-paginate';
import Pagination from 'components/ui/pagination/pagination';

import bikesArray from 'mockAPI/dbCatalog';
import { useState } from 'react';
import Sorting from 'components/ui/sorting/sorting';

const CatalogPage = () => {
  
  const itemsPerPage = 9; 
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (data: any) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBikes = bikesArray.slice(startIndex, endIndex);

  const pageCount = Math.ceil(bikesArray.length / itemsPerPage);

  const sortOptions = [
    { value: 'byPopularity', label: 'За популярністю' },
    { value: 'cheaper',label: 'Дешевші' },
    { value: 'moreExpensive',label: 'Дорожчі' },
  ] 

  return (
    <>
      <Helmet>
        <title>Сторінка каталога</title>
      </Helmet>
      <div className='catalog-page page'>
        <div className='container'>
          <h1 className='title'>Сторінка каталога</h1>
          <Sorting options={sortOptions}/>
          <div className='flex gap-20'>
            <Filters />
            <div className='catalog'>
              <ul className='grid grid-3 gap-20'>
                {currentBikes.map((productItem, index) => (
                  <li key={index}>
                    <BikeCard
                      productName={productItem.productName}
                      productImageUrl={productItem.productImageUrl}
                      productPageUrl={productItem.productPageUrl}
                      productPrice={productItem.productPrice}
                    />
                  </li>
                ))}
              </ul>
              <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            </div>
          </div>
          <section className=''>
            <h2 className='title'>Нещодавно переглянуті</h2>
            <BikeSlider />
          </section>
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
