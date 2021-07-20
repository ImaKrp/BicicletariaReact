import styled from "styled-components";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
  transition: all 0.3s;

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

export const Icon = styled(Link)`
  width: 6.5rem;
  height: 6.5rem;
  margin-right: 1rem;

  img {
    width: 6.5rem;
    height: 6.5rem;
  }
`;

export const Linked = styled(Link)`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
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

export const Linking = styled(AnchorLink)`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
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

export const Unlinked = styled.a`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
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

export const Arrow = styled.h1`
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

export const CartDiv = styled.div`
  width: fit-content;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 1.8rem;
`;

export const Notify = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background-color: #a442ff;
  opacity: ${(props) => (props.active ? "1" : "0")};
  position: absolute;
  top: -2px;
  right: -2px;
  clip-path: circle();
`;

export const Void = styled.div`
  width: fit-content;
  background-color: transparent;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  .modal {
    position: absolute;
    width: 24rem;
    height: fit-content;
    padding: 1.5rem 0;
    background-color: var(--white);
    box-shadow: 0px 3px 10px -1px rgba(0, 0, 0, 0.34);
    top: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s;
    pointer-events: none;
  }

  &:hover {
    .modal {
      opacity: 1;
      pointer-events: visible;
    }
  }

  .row {
    display: flex;
    color: var(--color-text);
    width: 80%;
    align-items: center;
    justify-content: space-between;
    margin: 1rem 0;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;

    hr {
      width: 40%;
      height: 1px;
      background-color: var(--purple);
    }
  }
`;

export const Login = styled(Link)`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 3.9rem;
  color: var(--white);
  background-color: var(--purple);
  border: 2px solid var(--purple);
  padding: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const SignUpBtn = styled.a`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 3.9rem;
  color: var(--purple);
  border: 2px solid var(--purple);
  background-color: var(--white);
  padding: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--white);
    background-color: var(--purple);
    border: 2px solid var(--purple);
    filter: brightness(1.2);
  }
`;

export const SignUp = styled(Link)`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 3.9rem;
  color: var(--purple);
  border: 2px solid var(--purple);
  background-color: var(--white);
  padding: 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: var(--white);
    background-color: var(--purple);
    border: 2px solid var(--purple);
    filter: brightness(1.2);
  }
`;