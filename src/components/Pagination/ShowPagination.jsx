import React from 'react';
import { Pagination } from '@mui/material';

function ShowPagination({ todoPerPage, total, paginate }) {
  const numberPage = () => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(total / todoPerPage); i += 1) {
      pageNumber.push(i);
    }
    return pageNumber.length;
  };

  return (
    <Pagination
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      color='primary'
      count={numberPage()}
      onChange={(event, page) => paginate(page)}
    />
  );
}

export default ShowPagination;
