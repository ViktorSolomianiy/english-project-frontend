import { useField } from 'formik';

import { Container, InputStyled } from './StyledInput';

export const Input = ({ ...props }) => {
  const [field] = useField(props.field.name);

  return (
    <Container>
      <InputStyled {...field} {...props} />
    </Container>
  );
};
