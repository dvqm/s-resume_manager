import React, { useEffect } from 'react';
import { Snackbar, Slide, SnackbarContent } from '@mui/material';
import { styled } from '@mui/system';

const StyledSnackbarContent = styled(SnackbarContent)(({ _, bgcolor }) => ({
  background: bgcolor,
  color: 'black',
  text: 'center',
}));

const SlideTransition = (props) => {
  return <Slide {...props} direction='left' />;
};

const ToastMessage = ({ toast, setToast, time = 3000 }) => {
  const [isOpen, color, message] = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast([ false, '', '' ]);
    }, time);

    return () => clearTimeout(timer);
  }, [time, setToast]);

  return (
    <Snackbar
      open={isOpen}
      onClose={() => setToast([ false, '', '' ])}
      TransitionComponent={SlideTransition}
      autoHideDuration={time}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
    >
      <StyledSnackbarContent message={message} bgcolor={color} />
    </Snackbar>
  );
};

export default ToastMessage;
