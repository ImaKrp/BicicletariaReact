import styled from "styled-components";
import { Link } from "react-router-dom";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(/Banners/Bg.png);
  background-size: cover;
  background-position: center;
  padding: 5rem 0;
`;

export const Form = styled.form`
  width: 25rem;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.img`
  width: 10rem;
  height: 10rem;
  margin-bottom: 3rem;
`;

export const Log = styled.button`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.9rem;
  color: var(--white);
  background-color: var(--purple);
  border: 2px solid var(--purple);
  padding: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 1rem;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Input = styled.input`
  font-family: "Poppins", sans-serif;
  display: flex;
  text-align: center;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.6rem;
  color: var(--white);
  background-color: transparent;
  caret-color: var(--purple);
  border-bottom: 2px solid var(--purple);
  transition: all 0.3s;
  font-weight: 300;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const Arrow = styled(Link)`
  position: absolute;
  left: 2%;
  top: 2%;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: var(--purple);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Eye = styled.button`
width: 1.8rem;
height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1rem;
  font-size: 1.4rem;
  background-color: transparent;
  color: var(--purple);
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    filter: brightness(1.2);
  }
`;