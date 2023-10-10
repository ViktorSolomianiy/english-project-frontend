import { useState } from 'react';

import { Container } from './StyledHero';

import { Modal } from '../../common/Modal/Modal';
import { LessonForm } from '../LessonForm/LessonForm';
import { Button } from '../../common/Button/Button';

export const Hero = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <Container>
      {isOpened && (
        <Modal onCloseModal={handleToggleModal} isOpened={isOpened}>
          <LessonForm onCloseModal={handleToggleModal} />
        </Modal>
      )}

      <Button onClick={handleToggleModal}>Записатися на урок</Button>
    </Container>
  );
};
