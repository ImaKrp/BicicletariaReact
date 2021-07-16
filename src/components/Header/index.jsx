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
          <i className="fas fa-times"></i>
        </CloseBtn>
      </Drawer>

      <Wrapper>
        <PurpleNav>
          <SmallLink>
            <i className="fab fa-facebook-square"></i>
          </SmallLink>
          <SmallLink>
            <i className="fab fa-instagram"></i>
          </SmallLink>
          <SmallLink>
            <i className="fab fa-youtube"></i>
          </SmallLink>
          <SmallLink>
            <i className="fab fa-whatsapp"></i>
          </SmallLink>
          <SmallLink>
            <i className="fas fa-envelope"></i>
          </SmallLink>
        </PurpleNav>
        <BlackNav>
          <Icon href="/">
            <img src="/logo512.png" alt=""/>
          </Icon>
          <Row>
            {props.children}
            <Link>Home</Link>
            <Link>Sobre</Link>
            <Link>
              Conta
              <Arrow>
                <i className="fas fa-caret-down"></i>
              </Arrow>
            </Link>
            <CartBtn onClick={() => ToggleCart()}>
              <i className="fas fa-shopping-cart"></i>
            </CartBtn>
          </Row>
        </BlackNav>
      </Wrapper>
    </>
  );
};

export default Header;
