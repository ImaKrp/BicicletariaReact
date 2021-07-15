import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    right: -30%;
    visibility: hidden;
  }
  to {
    right: 0;
    visibility: visible;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
    visibility: visible;
  }
  to {
    right: -30%;
    visibility: hidden;
  }
`;

export const Modal = styled.div`
  animation: ${(props) =>
    props.active
      ? css`
          ${slideIn} 0.7s forwards;
        `
      : css`
          ${slideOut} 0.7s forwards;
        `};
  padding: 1rem 2rem;
  width: 30%;
  height: 80%;
  background-color: var(--white);
  right: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  box-shadow: -3px 3px 10px -1px rgba(0, 0, 0, 0.2);
`;

export const ModalRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  gap: 1rem;
  color: var(--black);
  cursor: default;
  width: 100%;
  position: relative;
  margin-bottom: 0.7rem;
  height: 4.7rem;

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--purple);
    position: absolute;
    bottom: 0;
  }
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  margin-bottom: 0.7rem;
  color: var(--color-header);
  font-size: 2.4rem;
  cursor: pointer;

  &:hover {
    color: var(--purple);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 12rem;
  box-shadow: 0px 3px 10px -1px rgba(0, 0, 0, 0.34);
`;

export const PurpleNav = styled.div`
  width: 100%;
  padding: 0 12.5%;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--white);
  background-color: var(--purple);
  gap: 1%;
`;

export const BlackNav = styled.div`
  width: 100%;
  padding: 0 12.5%;
  height: 9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--white);
  background-color: var(--color-header);
`;

export const Row = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const SmallLink = styled.a`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d2bfff;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--white);
  }
`;

export const Icon = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`;

export const Link = styled(SmallLink)`
  width: fit-content;
  color: var(--white);
  font-size: 1.8rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--purple);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #d2bfff;
    &::after {
      width: 100%;
    }
  }
`;

export const Arrow = styled.div`
  width: fit-content;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  margin-left: 0.5rem;
`;

export const CartBtn = styled.button`
  width: fit-content;
  background-color: transparent;
  color: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s;
  font-size: 1.8rem;

  &::after {
    content: "";
    position: absolute;
    width: 0px;
    height: 2px;
    bottom: -0.6rem;
    left: 0;
    background-color: var(--purple);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: #d2bfff;
    &::after {
      width: 100%;
    }
  }
`;
