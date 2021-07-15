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
  min-width: 40rem;
  height: 80%;
  background-color: #fff;
  right: 0;
  position: absolute;
  z-index: 2;
  top: 0;
  box-shadow: -3px 3px 10px -1px rgba(0, 0, 0, 0.1);
`;

export const ModalRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  gap: 1rem;
  color: var(--color-header);
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

export const ModalTotal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
  color: var(--color-header);
  cursor: default;
  width: 100%;
  position: relative;
  margin-bottom: 0.7rem;

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--purple);
    position: absolute;
    bottom: 0;
  }

  span {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  h5 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  gap: 2rem;
  color: var(--color-header);
  cursor: default;
  width: 100%;
  position: relative;
  margin-bottom: 0.7rem;
  height: 51.5rem;
`;

export const ModalEnd = styled(ModalRow)`
  height: 11rem;
  bottom: 0;
  flex-direction: column;

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--purple);
    position: relative;
  }
  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    font-size: 1.4rem;
    div {
      gap: 0.6rem;
      transition: all 0.3s;
      cursor: pointer;
      &:hover {
        color: var(--purple);
      }
    }
    hr {
      transform: rotate(90deg);
      width: 5%;
      height: 2px;
    }
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
  position: relative;

  &:hover {
    color: var(--purple);
  }
`;

export const Buy = styled.button`
  background-color: var(--purple);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  font-size: 2.4rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
  height: 6rem;

  &:hover {
    filter: brightness(1.2);
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

export const Orders = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;

  img {
    width: 10rem;
  }
  .column {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h6,
      span {
        font-size: 1.6rem;
      }

      span {
        font-weight: 500;
      }

      h6 {
        font-weight: 400;
      }
    }
  }
`;

export const Trash = styled.button`
  background-color: transparent;
  color: var(--color-header);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.8rem;

  &:hover {
    color: var(--purple);
  }
`;
