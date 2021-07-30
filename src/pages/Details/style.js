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
  padding: 5% 0;
  text-align: left;
  width: 50%;
  height: 100%;
`;

export const Image = styled.img`
  width: 85%;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 400;
`;

export const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 2rem 0;
`;

export const BuyBtn = styled.button`
  width: 80%;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
  margin: 2rem auto;
  color: var(--white);
  background-color: var(--purple);
  padding: 0.8rem;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;
