import React from "react";

import { Card } from "../../components/index";

import { Produtos } from "../../provider/Produtos"

import {
  Content,
  Body,
  Banner,
  Title,
  Column,
  BannerDiv,
} from "./style";

export const Products = () => {
  return (
    <>
      <Body>
        <Content>
          <Banner src="/Banners/Header.png" />
          <Title>
            <h1>Produtos</h1>
            <hr />
          </Title>
          <Column>
          {Produtos.map(produto =>
          (
            <Card id={produto.id} name={produto.name} price={produto.price}/>
            ))}
          </Column>
          <BannerDiv>
          </BannerDiv>
        </Content>
      </Body>
    </>
  );
};
