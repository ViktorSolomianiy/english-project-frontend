import { useEffect } from 'react';
import { ContactModal, Text, LinkList, Link } from './StyledContactsModal';

import { FaTelegramPlane, FaPhoneAlt, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const ContactsModal = ({ openContactsModal, handleOnOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [handleOnOpen]);

  return (
    <ContactModal customBurgerIcon={false} isOpen={openContactsModal} onClose={handleOnOpen} right>
      <LinkList>
        <Text>Зв'язатись з нами:</Text>

        <Link href="tel:+380934199572">
          <FaPhoneAlt /> +38(063)-123-45-67
        </Link>
        <Link href="mailto:chernobuy1@gmail.com">
          <MdEmail /> chernobuy1@gmail.com
        </Link>
        <Link href="https://t.me/ancoldest">
          <FaTelegramPlane /> @ancoldest
        </Link>
        <Link href="instagram:">
          <FaInstagram /> example
        </Link>
      </LinkList>
    </ContactModal>
  );
};
