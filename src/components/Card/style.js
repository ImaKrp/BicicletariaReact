import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
      height: 8rem;
    }
    to {
      height: 12.5rem;
    }
`;
const slideDown = keyframes`
  from {
      height: 12.5rem;
    }
    to {
      height: 8rem;
    }
`;

const Show = keyframes`
  from {
      visibility: hidden;
      opacity: 0;
    }
    to {
      visibility: visible;
      opacity: 1;
    }
`;
const Hide = keyframes`
  from {
    visibility: visible;
      opacity: 1;
    }
    to {
      visibility: hidden;
      opacity: 0;
    }
`;

export const CardWrapper = styled.div`
  width: 33rem;
  height: 28rem;
  background-color: #fff;
  position: relative;
  transition: all 0.3s;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  border-radius: 0.4rem;
  margin-bottom: 1rem;

  &:hover {
    div {
      animation: ${slideUp} 0.2s forwards;
    }
    .buttons {
      animation: ${Show} 0.1s forwards;
    }
  }

  div {
    animation: ${slideDown} 0.3s forwards;
  }

  .buttons{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3%;
    animation: ${Hide} 0.3s forwards;
  }

  a, button {
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 3.7rem;
    color: var(--white);
    background-color: var(--purple);
    padding: 0.8rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
  }
  a:hover, button:hover {
    filter: brightness(1.2);
  }
`;

export const Img = styled.img`
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
`;

export const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
  text-align: left;
  width: 100%;
  height: 9rem;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 8rem;

  h3,
  h5 {
    color: var(--color-header);
    margin-left: 2rem;
  }

  h3 {
    font-size: 1.8rem;
    padding: 0.8rem 0;
    font-weight: 600;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;
