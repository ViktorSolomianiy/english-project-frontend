import { TextField } from '@mui/material';
import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const IconWrapped = styled.div`
  margin-top: 3px;
`;

export const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const Description = styled(TextField)`
  width: 100%;

  .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${props => {
        if (props.error) {
          return '#ffc832';
        }
        return '#8f9fe4';
      }};
    }
  }

  .MuiInputLabel-root {
    font-size: 12px;
    color: var(--not-active-color);
  }

  .MuiInputLabel-root.Mui-focused {
    color: var(--primary-color);
  }

  @media screen and (min-width: 768px) {
    width: 400px;

    .MuiInputLabel-root {
      font-size: 15px;
    }
  }
`;

export const CharCount = styled.div`
  position: absolute;
  font-size: 12px;
  right: 0;
  bottom: 0;
  margin-right: 10px;
  margin-bottom: 10px;
  color: var(--char-count-color);
`;
