import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  text-align: center;
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0 15%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;