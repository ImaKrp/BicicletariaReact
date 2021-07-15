import { useState } from "react";
import {
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
import { Drawer } from "../index"

const Header = (props) => {
  const [cart, setCart] = useState(false);
  const ToggleCart = () => setCart(!cart);

  return (
    <>
      <Drawer active={cart}>
        <CloseBtn onClick={() => ToggleCart()}>
          <i class="fas fa-times"></i>
        </CloseBtn>
      </Drawer>

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
