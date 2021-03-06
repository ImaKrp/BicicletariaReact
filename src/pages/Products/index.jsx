import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Card, Footer, Header, Search } from "../../components/index";
import { useCart } from "../../hooks/useCart";
import { useProducts } from "../../hooks/useProducts";
import { Content, Body, Banner, Title, Row, Input } from "./style";

export const Products = () => {
  const [search, setSearch] = useState("");
  const { addItemsToCart } = useCart();
  const { fetchProducts, listProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const Produtos = listProducts();

  const ToastAdded = () =>
    toast.dark("Produto Adicionado ao Carrinho", {
      position: "top-right",
      autoClose: 2000,
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
            {Produtos &&
              Produtos.filter(
                ({ name }) =>
                  name.toLowerCase()?.indexOf(search.toLowerCase()) > -1
              ).map((produto) => (
                <Card
                  key={produto.id}
                  id={produto.id}
                  img={produto.img}
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
