import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  text-align: center;
  position: relative;
`;

export const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Banner = styled.img`
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0 20rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.4rem;
    font-weight: 400;
    color: var(--black);
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: var(--purple);
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0 15%;

  @media (max-width: 1366px) {
    padding: 0 5%;
  }
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
