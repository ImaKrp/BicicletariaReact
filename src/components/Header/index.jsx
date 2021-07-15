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
            <Icon src="/logo512.png" />
            <Row>
            {props.children}
              <Link>Home</Link>
              <Link>Sobre</Link>
              <Link>Conta <Arrow> <i class="fas fa-chevron-down"></i></Arrow></Link>
              <CartBtn onClick={() => ToggleCart()}>
              <i class="fas fa-shopping-cart"></i>
            </CartBtn>
            </Row>
        </BlackNav>
      </Wrapper>
    </>
  );
};

export default Header