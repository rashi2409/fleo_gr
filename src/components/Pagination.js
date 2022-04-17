import React from 'react';
import './PaginateStyles.css'

const Pagination = ({ repoPerPage, totalRepo, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRepo / repoPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className='pagination'>
        <button className='buttonStyle' onClick={() => {
          if(currentPage >= 2){
            paginate(currentPage-1)
          }
        }}>
          Previous
        </button>
        {pageNumbers.map(number => (
          <div key={number} className='page'>
            <a onClick={() => paginate(number)} className='page-link'>
              {number}
            </a>
          </div>
        ))}
        <button className='buttonStyle' onClick={() => {
          if(currentPage <= pageNumbers.length-1){
            paginate(currentPage+1)
          }
        }}>
          Next
        </button>
        <span className='pageNo'>
          Page {' '} <strong>{currentPage} of {pageNumbers.length}</strong>
        </span>
      </div>
    </nav>
  );
};

export default Pagination;