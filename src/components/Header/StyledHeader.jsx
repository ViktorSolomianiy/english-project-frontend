import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  box-shadow: 0px 9px 27px -3px rgba(0, 0, 0, 0.51);
  background-color: var(--second-color);

  @media screen and (min-width: 768px) {
    height: 70px;
  }

  @media screen and (min-width: 1200px) {
    height: 80px;
  }
`;

export const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  background-color: inherit;
  color: var(--primary-text-color);
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 20px;
  transition: color 300ms ease;

  &:hover {
    color: #efe2fa;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
    margin-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 19px;
    margin-right: 35px;
  }
`;
