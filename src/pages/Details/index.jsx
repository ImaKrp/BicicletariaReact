import React, { useEffect } from "react";
import {
  Body,
  Content,
  Row,
  Column,
  Image,
  ImgColumn,
  Title,
  Price,
  BuyBtn,
} from "./style";
import { Footer, Header } from "../../components/index";
import { useQuery } from "../../hooks/useQuery";
import { useProducts } from "../../hooks/useProducts";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";

export const Details = () => {
  const query = useQuery();
  const id = query.get("id") ?? "";

  const { fetchProduto, getProduct } = useProducts();

  const { addItemsToCart } = useCart();
  const { fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

  useEffect(() => {
    fetchProduto(id);
  }, [fetchProduto, id]);

  const produto = getProduct();
  console.log(produto);

  return (
    <>
      <Header />
      <Body>
        <Content>
          <Row>
            <ImgColumn>
              <Image src={produto.img} />
            </ImgColumn>
            <Column>
              <Title>{produto.name}</Title>
              <Price>R$ {produto.price},00</Price>
              <BuyBtn onClick={() => addProduct(produto)}>Comprar</BuyBtn>
            </Column>
          </Row>
          <Footer />
        </Content>
      </Body>
    </>
  );
};
