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
  CartDiv,
  Notify,
} from "./style";
import { Drawer } from "../index";
import { useCart } from "../../hooks/useCart";

const Header = (props) => {
  const { showAllItems } = useCart();
  const CartItems = showAllItems();
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
            <img src="/logo512.png" alt="" />
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
            <CartDiv>
              <CartBtn onClick={() => ToggleCart()}>
                <i className="fas fa-shopping-cart"></i>
              </CartBtn>
              <Notify active={ CartItems.length > 0 ? true : false}/>
            </CartDiv>
          </Row>
        </BlackNav>
      </Wrapper>
    </>
  );
};

export default Header;
