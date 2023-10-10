import { useState } from 'react';

import { Container, HeaderButton } from './StyledHeader';
import { RiContactsFill } from 'react-icons/ri';

import { ContactsModal } from '../ContactsModal/ContactsModal';

export const Header = () => {
  const [openContactsModal, setOpenContactsModal] = useState(false);

  const handleOnOpen = () => setOpenContactsModal(!openContactsModal);

  return (
    <div>
      <Container>
        <HeaderButton type="button" onClick={handleOnOpen}>
          <RiContactsFill /> Зв'язатись з нами
        </HeaderButton>
      </Container>

      <ContactsModal openContactsModal={openContactsModal} handleOnOpen={handleOnOpen} />
    </div>
  );
};
