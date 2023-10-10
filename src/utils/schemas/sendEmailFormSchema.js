import * as yup from 'yup';

const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

export const sendEmailFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().matches(emailRegex).required(),
  phone: yup.string().matches(phoneRegex).required(),
  description: yup.string().max(300),
});
