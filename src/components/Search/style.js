import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 50rem;
  position: relative;
  height: 4rem;

  @media (max-width: 960px) {
    width: 30rem;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 4.5rem;
  height: 100%;
  font-size: 1.8rem;
  color: var(--purple);
  transition: all 0.3s;

  &:hover {
    color: var(--white);
  }
`;
