import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';

export const AlertMessage = ({ setOpenErrorMessage, openErrorMessage, maxSymbolDesc, values }) => {
  const handleClose = () => {
    setOpenErrorMessage(false);
  };

  const { name, email, phone } = values;
  const alertValidateMessage = name === '' || email === '' || phone === '';

  return (
    <div>
      {alertValidateMessage && (
        <Snackbar
          open={openErrorMessage}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="error">
            Заповніть всі поля.
          </Alert>
        </Snackbar>
      )}

      {maxSymbolDesc && (
        <Snackbar
          open={maxSymbolDesc}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity="warning">
            Введено максимальну кількість символів.
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
