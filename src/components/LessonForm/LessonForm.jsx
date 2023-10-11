import { useState } from 'react';
import { useFormik, Formik, Field } from 'formik';
import { toast } from 'react-toastify';

import { Input } from '../../common/Input/Input';
import { Button } from '../../common/Button/Button';
import { AlertMessage } from '../../common/Alert/Alert';
import {
  FormStyled,
  LabelWrapper,
  IconWrapped,
  DescriptionContainer,
  Description,
  CharCount,
} from './StyledLessonForm';

import { AiOutlineUser } from 'react-icons/ai';
import { BsPhone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';

import { sendEmailFormSchema } from '../../utils/schemas/sendEmailFormSchema';
import { sendEmail } from '../../services/api/api';

export const LessonForm = ({ onCloseModal, setAnimationModal }) => {
  const [openErrorMessage, setOpenErrorMessage] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [maxSymbolDesc, setMaxSymbolDesc] = useState(false);
  const [heplerTextPhone, setHeplerTextPhone] = useState(false);
  const [heplerTextEmail, setHeplerTextEmail] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const closeModal = () => {
    setAnimationModal(false);

    setTimeout(() => {
      onCloseModal();
    }, 250);
  };

  const { handleSubmit, handleChange, setValues, values, errors, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      description: '',
    },
    validationSchema: sendEmailFormSchema,

    onSubmit: value => {
      setValues({
        name: '',
        email: '',
        phone: '',
        description: '',
      });

      sendEmail(value);
      toast.success('Данні відправлено!');

      closeModal();
    },
  });
  const { name, email, phone, description } = values;

  const handleClick = () => {
    if (name === '' || email === '' || phone === '') {
      setOpenErrorMessage(true);
      setErrorField(true);
    }

    if (errors.phone) setHeplerTextPhone(true);
    if (errors.email) setHeplerTextEmail(true);
    if (!errors.phone) setHeplerTextPhone(false);
    if (!errors.email) setHeplerTextEmail(false);
  };

  const handleDescriptionChange = e => {
    if (e.target.value.length <= 300) {
      handleChange(e);
      setCharCount(e.target.value.length);
      setErrorField(false);
      setMaxSymbolDesc(false);
    }

    if (e.target.value.length === 300) {
      setMaxSymbolDesc(true);

      setTimeout(() => {
        setMaxSymbolDesc(false);
      }, 6000);
    }
  };

  return (
    <Formik>
      <FormStyled onSubmit={handleSubmit}>
        <AlertMessage
          setOpenErrorMessage={setOpenErrorMessage}
          openErrorMessage={openErrorMessage}
          maxSymbolDesc={maxSymbolDesc}
          values={values}
        />

        <Field
          component={Input}
          label={
            <LabelWrapper>
              <IconWrapped>
                <AiOutlineUser />
              </IconWrapped>
              <div>
                <p>Ім'я та Призвище</p>
              </div>
            </LabelWrapper>
          }
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          error={errorField && !isSubmitting && name === ''}
        />

        <Field
          component={Input}
          label={
            <LabelWrapper>
              <IconWrapped>
                <FiMail />
              </IconWrapped>
              <div>
                <p>Пошта</p>
              </div>
            </LabelWrapper>
          }
          name="email"
          type="email"
          helperText={heplerTextEmail && 'Невірний формат'}
          value={email}
          onChange={handleChange}
          error={errorField && !isSubmitting && email === ''}
        />

        <Field
          component={Input}
          label={
            <LabelWrapper>
              <IconWrapped>
                <BsPhone />
              </IconWrapped>
              <div>
                <p>Телефон</p>
              </div>
            </LabelWrapper>
          }
          name="phone"
          type="tel"
          placeholder="0501234567"
          helperText={heplerTextPhone && 'Невірний формат'}
          value={phone}
          onChange={handleChange}
          error={errorField && !isSubmitting && phone === ''}
        />

        <DescriptionContainer>
          <Description
            label="Додаткова інформація (не обов'язково).."
            multiline
            rows={5}
            id="description"
            name="description"
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            error={errorField && !isSubmitting && description !== ''}
            inputProps={{ maxLength: 300 }}
          />
          <CharCount>{`${charCount} / 300`}</CharCount>
        </DescriptionContainer>

        <Button type="submit" onClick={handleClick}>
          Відправити
        </Button>
      </FormStyled>
    </Formik>
  );
};
