import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 33rem;
  background-color: var(--white);
  position: relative;
  transition: all 0.3s;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
  border-radius: 0.4rem;
  margin-bottom: 1rem;
`;

export const ImgBg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20rem;
  

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
`;

export const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
  text-align: left;
  padding-left: 2rem;
  width: 100%;
  height: 9rem;
  background-color: #fff;

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
    font-weight: 400;
    margin-bottom: 1.6rem;
  }
`;
