import styled from "styled-components";

export const Body = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-top: 5%;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 60rem;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 5%);
  border-radius: 0.4rem;
`;

export const ImgColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const Image = styled.img`
  width: 90%;

`;