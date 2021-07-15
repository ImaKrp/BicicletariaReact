import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 33rem;
  height: 33rem;
  background-color: var(--white);
  border: 1px solid var(--purple);
  position: relative;
  transition: all 0.3s;
  
  
`;

export const ImgBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;

  img {
    width: 100%;
  }
`;

export const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  height: 12.5rem;
  background-color: var(--white);

  div:last-of-type {
    padding: 0 0 1.2rem 0;
  }

  h3,
  h5 {
    color: var(--color-header);
  }

  h3 {
    font-size: 1.8rem;
    padding: 0.8rem 0;
    font-weight: 600;
  }

  h5 {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.6rem;
  }
`;