import { ToastContainer, Zoom } from 'react-toastify';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { LessonForm } from '../LessonForm/LessonForm';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <LessonForm />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        theme="light"
        transition={Zoom}
      />
    </div>
  );
}

export default App;
