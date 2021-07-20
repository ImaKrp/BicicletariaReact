import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, Footer, Header, Search } from "../../components/index";
import { useCart } from "../../hooks/useCart";

import Produtos from "../../utils/json/products.json";
import { Content, Body, Banner, Title, Row, Input } from "./style";

export const Products = () => {
  const [search, setSearch] = useState("");
  const { addItemsToCart } = useCart();

  const ToastAdded = () =>
    toast.dark("Produto Adicionado ao Carrinho", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });

  function addProduct(produto) {
    addItemsToCart(produto);
    ToastAdded();
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        style={{ fontFamily: "Poppins, sans-serif" }}
      />
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
                key={produto.id}
                id={produto.id}
                name={produto.name}
                price={produto.price}
                quantidade={produto.quantidade}
              >
                <button onClick={() => addProduct(produto)}>Comprar</button>
              </Card>
            ))}
          </Row>
          <Footer />
        </Content>
      </Body>
    </>
  );
};
