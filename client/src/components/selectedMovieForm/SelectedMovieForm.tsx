import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Form, Field } from 'react-final-form';
import { FC } from 'react';

type TSelectedMoviesForm = {
  onSubmit: (e: any) => void;
};

const SelectedMovieForm: FC<TSelectedMoviesForm> = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: any = {};
        if (!values.selectedMoviesField) {
          errors.selectedMoviesField = 'Required';
        }
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
            <Field
              name="selectedMoviesField"
              render={({ input, meta }) => (
                <>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Put the list name"
                    inputProps={{ 'aria-label': 'put list name' }}
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="submit" color="primary" sx={{ p: '10px' }}>
              <CheckIcon />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};

export default SelectedMovieForm;
