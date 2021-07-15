import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 50rem;
  position: relative;
  height: 4rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: var(--input);
  border: 1px solid var(--purple);
  padding-left: 0.7rem;
  color: var(--black);
  font-size: 14px;
  position: relative;
  top: 0;
  right: 0;
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
  color : var(--purple);
  transition: all 0.3s;

  &:hover{
    color: var(--white);
  }
`;
