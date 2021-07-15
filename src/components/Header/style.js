import styled from "styled-components";

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