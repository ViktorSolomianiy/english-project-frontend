import { useState } from 'react';

import { Container } from './StyledHero';

import { Modal } from '../../common/Modal/Modal';
import { LessonForm } from '../LessonForm/LessonForm';
import { Button } from '../../common/Button/Button';

export const Hero = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [animationModal, setAnimationModal] = useState(true);

  const handleToggleModal = () => setIsOpened(!isOpened);

  return (
    <Container>
      {isOpened && (
        <Modal
          onCloseModal={handleToggleModal}
          isOpened={isOpened}
          animationModalOnSubmit={animationModal}
        >
          <LessonForm onCloseModal={handleToggleModal} setAnimationModal={setAnimationModal} />
        </Modal>
      )}

      <Button
        onClick={() => {
          setAnimationModal(true);
          handleToggleModal();
        }}
      >
        Записатися на урок
      </Button>
    </Container>
  );
};
