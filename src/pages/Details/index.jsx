import React, { useEffect } from "react";
import { Body, Content, Row, Column, Image, ImgColumn } from "./style";
import { Footer, Header  } from "../../components/index";
import { useQuery } from '../../hooks/useQuery';
import { useProducts } from "../../hooks/useProducts";

export const Details = () => {
  const query = useQuery();
  const id = query.get('id') ?? '';

  const { fetchProduto, getProduct } = useProducts();
  
  useEffect(() => {
    fetchProduto(id)
  }, [fetchProduto, id]);

  const produto = getProduct();
  console.log(produto)

  return (
    <>
      <Header />
      <Body>
        <Content>
          <Row>
            <ImgColumn>
            <Image src={produto.img}/>
            </ImgColumn>
            <Column>
            </Column>
          </Row>   
        <Footer />
        </Content>
      </Body>
    </>
  );
};
