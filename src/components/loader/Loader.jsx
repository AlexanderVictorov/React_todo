import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

function Loader() {
  const [openLoader, setOpenLoader] = useState(false);
  const handleClose = () => setOpenLoader(false);
  const handleToggle = () => setOpenLoader(!openLoader);
  useEffect(() => {
    handleToggle();
  }, []);
  return (
    <Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoader}
        onClick={handleClose}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
    </Box>
  );
}

export default Loader;
