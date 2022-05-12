import React from 'react';
import { Pagination } from '@mui/material';

function ShowPagination({ todoPerPage, total, paginate }) {
  const numberPage = Math.ceil(total / todoPerPage);

  return (
    <Pagination
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
      color='primary'
      count={numberPage}
      onChange={(event, page) => paginate(page)}
    />
  );
}

export default ShowPagination;
