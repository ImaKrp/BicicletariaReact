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
  Void,
  Login,
  SignUp,
} from "./style";
import { Drawer } from "../index";
import { useCart } from "../../hooks/useCart";
import { useSession } from "../../hooks/useSession";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = (props, { ref }) => {
  const { onGoingSession } = useSession();
  const { showAllItems } = useCart();
  const isLogged = onGoingSession();
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
          <SmallLink href="https://www.facebook.com">
            <i className="fab fa-facebook-square"></i>
          </SmallLink>
          <SmallLink href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </SmallLink>
          <SmallLink href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </SmallLink>
          <SmallLink href="http://api.whatsapp.com">
            <i className="fab fa-whatsapp"></i>
          </SmallLink>
          <SmallLink href="mailto: ">
            <i className="fas fa-envelope"></i>
          </SmallLink>
        </PurpleNav>
        <BlackNav>
          <Icon href="/">
            <img src="/logo512.png" alt="" />
          </Icon>
          <Row>
            {props.children}
            <Link href="/">Home</Link>
            <AnchorLink href="#footer">
              <Link>Sobre</Link>
            </AnchorLink>
            <Void>
              <Link>
                Conta
                <Arrow>
                  <i className="fas fa-caret-down"></i>
                </Arrow>
              </Link>
              <div className="modal">
                <Login href="/login">
                  Entrar
                  <Arrow>
                    <i className="fas fa-caret-right"></i>
                  </Arrow>
                </Login>
                <div className="row">
                  <hr />
                  ou
                  <hr />
                </div>
                <SignUp>Cadastre-se</SignUp>
              </div>
            </Void>
            <CartDiv>
              <CartBtn onClick={() => ToggleCart()}>
                <i className="fas fa-shopping-cart"></i>
              </CartBtn>
              <Notify active={CartItems.length > 0 ? true : false} />
            </CartDiv>
          </Row>
        </BlackNav>
      </Wrapper>
    </>
  );
};

export default Header;
