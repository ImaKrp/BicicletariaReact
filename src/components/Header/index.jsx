import { useState } from "react";
import {
  Modal,
  ModalRow,
  CloseBtn,
  Wrapper,
  PurpleNav,
  BlackNav,
  SmallLink,
  Icon,
  Row,
  Link,
  Arrow,
  CartBtn,
  ModalEnd,
  ModalContent,
  ModalTotal,
  Buy,
  Orders,
  Trash,
} from "./style";

const Header = (props) => {
  const [cart, setCart] = useState(false);
  const ToggleCart = () => setCart(!cart);

  return (
    <>
      <Modal active={cart}>
        <ModalRow>
          <ModalRow>
            <span>Carrinho de Compras</span>
          </ModalRow>
          <CloseBtn onClick={() => ToggleCart()}>
            <i class="fas fa-times"></i>
          </CloseBtn>
          <hr />
        </ModalRow>
        <ModalContent>
          <Orders>
            <img src="/Products/1.jpg" alt="" />
            <div class="column">
              <div class="row">
                <span>Bicicleta Casual</span>
                <Trash>
                  <i class="fas fa-trash-alt"></i>
                </Trash>
              </div>
              <div class="row">
                <h6>Quantidade: 1</h6>
                <span>R$ 0,00</span>
              </div>
            </div>
          </Orders>
          <Orders>
            <img src="/Products/1.jpg" alt="" />
            <div class="column">
              <div class="row">
                <span>Bicicleta Casual</span>
                <Trash>
                  <i class="fas fa-trash-alt"></i>
                </Trash>
              </div>
              <div class="row">
                <h6>Quantidade: 1</h6>
                <span>R$ 0,00</span>
              </div>
            </div>
          </Orders>
        </ModalContent>
        <ModalTotal>
          <span>subtotal: </span>
          <h5>R$ 0,00</h5>
          <hr />
        </ModalTotal>
        <ModalEnd>
          <Buy>Comprar Agora</Buy>
          <div class="row">
            <div>
              <i class="fas fa-caret-left"></i> Continuar Comprando
            </div>
            <hr />
            <div>
              Visualizar Carrinho <i class="fas fa-caret-right"></i>
            </div>
          </div>
        </ModalEnd>
      </Modal>

      <Wrapper>
        <PurpleNav>
          <SmallLink>
            <i class="fab fa-facebook-square"></i>
          </SmallLink>
          <SmallLink>
            <i class="fab fa-instagram"></i>
          </SmallLink>
          <SmallLink>
            <i class="fab fa-youtube"></i>
          </SmallLink>
          <SmallLink>
            <i class="fab fa-whatsapp"></i>
          </SmallLink>
          <SmallLink>
            <i class="fas fa-envelope"></i>
          </SmallLink>
        </PurpleNav>
        <BlackNav>
          <a href="/">
            <Icon src="/logo512.png" />
          </a>
          <Row>
            {props.children}
            <Link>Home</Link>
            <Link>Sobre</Link>
            <Link>
              Conta
              <Arrow>
                <i class="fas fa-caret-down"></i>
              </Arrow>
            </Link>
            <CartBtn onClick={() => ToggleCart()}>
              <i class="fas fa-shopping-cart"></i>
            </CartBtn>
          </Row>
        </BlackNav>
      </Wrapper>
    </>
  );
};

export default Header;
