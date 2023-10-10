import Button from '@mui/material/Button';
import styled from '@emotion/styled';

export const ButtonStyled = styled(Button)`
  width: 200px;
  height: 50px;
  background-color: var(--primary-color);
  color: var(--primary-text-color);

  &:hover {
    background-color: var(--hover-color);
  }
`;
