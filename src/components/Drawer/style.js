import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    right: -60%;
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
    right: -60%;
    visibility: hidden;
  }
`;

export const Modal = styled.div`
  animation: ${(props) =>
    props.active
      ? css`
          ${slideIn} 1s forwards;
        `
      : css`
          ${slideOut} 1s forwards;
        `};
  padding: 1rem 2rem;
  width: 30%;
  min-width: 40rem;
  height: 80%;
  background-color: #fff;
  right: 0;
  position: absolute;
  z-index: 1;
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
  height: 6.2%;

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
  height: 72%;
  max-height: 72%;
  overflow: scroll;
`;

export const ModalEnd = styled(ModalRow)`
  height: 14%;
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

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const EmptyText = styled.span`
  display: flex;
  font-size: 1.6rem;
  margin-top: 2rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
`;

export const Empty = styled.img`
  width: 50%;
`;