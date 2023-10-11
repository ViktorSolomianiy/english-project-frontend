import styled from '@emotion/styled';
import { slide as Menu } from 'react-burger-menu';

export const ContactModal = styled(Menu)`
  position: fixed;
  width: 100%;
  max-width: 60%;
  background-color: var(--modal-background-color);
  overflow-y: hidden;
  box-shadow: 0px 9px 27px -3px rgba(0, 0, 0, 0.51);

  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: start;
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--second-text-color);
  transition: color 300ms ease;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const LinkList = styled.div`
  margin-top: 10px;
  padding: 8px;

  @media screen and (min-width: 368px) {
    margin-left: 5px;
    padding: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
    padding: 25px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  display: flex;
  margin-bottom: 10px;
  color: var(--second-text-color);
  transition: color 300ms ease;

  &:hover {
    color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`;
