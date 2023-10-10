import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyled = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${props => {
        if (props.error) {
          return '#fc6470';
        }
        return '#8f9fe4';
      }};
    }
  }

  .MuiInputLabel-root {
    color: var(--not-active-color);
  }
  .MuiInputLabel-root.Mui-focused {
    color: var(--primary-color);
  }

  .MuiInputLabel-root.Mui-error {
    color: var(--error-color);
  }
  .MuiFormHelperText-root.Mui-error {
    color: var(--error-color);
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;
