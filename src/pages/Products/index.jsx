import React from "react";
import { useState } from "react";

import { Card, Footer, Header, Search } from "../../components/index";

import { Produtos } from "../../provider/Produtos";

import {
  Content,
  Body,
  Banner,
  Title,
  Row,
  Input,
} from "./style";

export const Products = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header>
        <Search>
          <Input
            type="text"
            placeholder="O que você procura?"
            onChange={(event) => setSearch(event.target.value)}
          />
        </Search>
      </Header>
      <Body>
        <Content>
          <Banner src="/Banners/Header.png" />
          <Title>
            <h1>Produtos</h1>
            <hr />
          </Title>
            <Row>
              {Produtos.filter(
                ({ name }) =>
                  name.toLowerCase()?.indexOf(search.toLowerCase()) > -1
              ).map((produto) => (
                <Card
                  id={produto.id}
                  name={produto.name}
                  price={produto.price}
                />
              ))}
            </Row>
          <Footer />
        </Content>
      </Body>
    </>
  );
};
