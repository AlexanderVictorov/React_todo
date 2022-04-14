import * as React from 'react';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';

// eslint-disable-next-line react/jsx-props-no-spreading
const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />);

export default function CustomizedSnackbars() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickable') return;
    setOpen(false);
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <Stack spacing={2} sx={{ width: '50%' }}>
      {/* <Button variant='outlined' onClick={handleClick}> */}
      {/*  Open success snackbar */}
      {/* </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      {/* <Alert severity='error'>This is an error message!</Alert> */}
      {/* <Alert severity='warning'>This is a warning message!</Alert> */}
      {/* <Alert severity='info'>This is an information message!</Alert> */}
      {/* <Alert severity='success'>This is a success message!</Alert> */}
    </Stack>
  );
}
