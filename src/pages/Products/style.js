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

export const BannerDiv = styled.div`
  width: 100%;
  height: 24rem;
  background-image: url(/Banners/Footer.png);
  position: absolute;
  bottom: 0;
  left: 0;

  div{
    padding: 0 12.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 0 12.5rem;

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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

