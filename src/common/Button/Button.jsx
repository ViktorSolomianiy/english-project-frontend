import { ButtonStyled } from './StyledButton';

export const Button = ({ type, children, onClick }) => {
  return (
    <ButtonStyled type={type} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
