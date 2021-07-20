import { useState } from "react";
import {
  CloseBtn,
  Wrapper,
  PurpleNav,
  BlackNav,
  SmallLink,
  Icon,
  Row,
  Linked,
  Arrow,
  CartBtn,
  CartDiv,
  Notify,
  Void,
  Login,
  Linking,
  SignUp,
  Unlinked,
  SignUpBtn
} from "./style";
import { Drawer } from "../index";
import { useCart } from "../../hooks/useCart";
import { useSession } from "../../hooks/useSession";

const Header = (props, { ref }) => {
  const { isItLogged, LogInOut } = useSession();
  const { showAllItems } = useCart();
  const isLogged = isItLogged();
  const CartItems = showAllItems();
  const [cart, setCart] = useState(false);
  const ToggleCart = () => setCart(!cart);
  
  const SignOut = () => LogInOut();

  return (
    <>
      <Drawer active={cart}>
        <CloseBtn onClick={() => ToggleCart()}>
          <i className="fas fa-times"></i>
        </CloseBtn>
      </Drawer>
      {CartItems.length > 0 ? true : false}
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
          <Icon to="/">
            <img src="/logo512.png" alt="" />
          </Icon>
          <Row>
            {props.children}
            <Linked to="/">Home</Linked>
            <Linking href="#footer">Sobre</Linking>
            <Void>
              <Unlinked>
                Conta
                <Arrow>
                  <i className="fas fa-caret-down"></i>
                </Arrow>
              </Unlinked>
              <div className="modal">
                {isLogged ? (
                  <>
                    <Login>Perfil</Login>
                    <div className="row">
                      <hr />
                      ou
                      <hr />
                    </div>
                    <SignUpBtn onClick={() => SignOut()}>Sair</SignUpBtn>
                  </>
                ) : (
                  <>
                    <Login to="/login">
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
                    <SignUp to="/signup">Cadastre-se</SignUp>
                  </>
                )}
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
