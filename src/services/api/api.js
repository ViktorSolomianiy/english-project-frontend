import axios from 'axios';

export const sendEmail = async data => {
  await axios
    .post('https://english-proj-backend.onrender.com/send-mail', data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response;
    })
    .catch(error => console.log(error.message));
};
