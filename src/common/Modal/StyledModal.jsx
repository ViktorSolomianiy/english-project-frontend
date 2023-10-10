import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
   from {
     opacity: 1;
   }
   to {
     opacity: 0;
   }
 `;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  opacity: ${props => (props.animationModal ? 1 : 0)};
  visibility: ${props => (props.animationModal ? 'visible' : 'hidden')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(161, 161, 161, 0.5);
  z-index: 1200;
  transition: opacity 300ms ease, visibility 300ms ease;
  animation: ${props => (props.animationModal ? fadeIn : fadeOut)} 300ms ease;
`;

export const ModalStyled = styled.div`
  position: relative;
  width: 100%;
  max-width: 80%;
  padding: 40px 16px;
  box-shadow: 0px 4px 16px rgba(17, 17, 17, 0.1);
  border-radius: 8px;
  background-color: #ffffff;

  @media screen and (min-width: 500px) and (max-width: 767px) {
    width: 400px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  right: 0;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  color: var(--not-active-color);
  transition: color 300ms ease;

  &:hover {
    color: var(--hover-color);
  }
`;
