import ReactPaginate from 'react-paginate';

import './_pagination.scss';

type PaginationProps = {
  pageCount: number,
  handlePageClick: (data: { selected: number }) => void;
}

const Pagination = ({ pageCount, handlePageClick }:PaginationProps) => {

  return (
    <ReactPaginate
    breakLabel='...'
    nextLabel='>'
    previousLabel='<'
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    renderOnZeroPageCount={null}
    containerClassName='pagination'
    activeClassName='active'
    activeLinkClassName='active'
    pageClassName='pagination__item'
    previousClassName='pagination__item pagination__item--prev'
    nextClassName='pagination__item pagination__item--next'
    disabledClassName='disabled'
    pageLinkClassName='pagination__link'
    previousLinkClassName='pagination__link pagination__link--prev'
    nextLinkClassName='pagination__link pagination__link--next'
    disabledLinkClassName='disabled'
    breakClassName='pagination__item pagination__item--break'
    breakLinkClassName='pagination__link pagination__link--break'
  />
  )
}

export default Pagination;