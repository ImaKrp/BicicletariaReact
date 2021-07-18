import {
  Modal,
  ModalRow,
  ModalEnd,
  ModalContent,
  ModalTotal,
  Buy,
  Orders,
  Trash,
  EmptyWrapper,
  Empty,
  EmptyText,
} from "./style";
import { useCart } from '../../hooks/useCart'
const Header = (props) => {
  const { deleteItemsFromCart, showAllItems, totalValue } = useCart();
  const allInCart = showAllItems();
  const value = totalValue()
  return (
    <>
      <Modal active={props.active}>
        <ModalRow>
          <ModalRow>
            <span>Carrinho de Compras</span>
          </ModalRow>
          {props.children}
          <hr />
        </ModalRow>
        <ModalContent>
        { allInCart.length > 0 ? allInCart.map((product, index) => {
            return (
              <Orders key={index}>
              <img src={`/Products/${product.id}.jpg`} alt="" />
              <div className="column">
                <div className="row">
                  <span>{product.name}</span>
                  <Trash onClick={() => deleteItemsFromCart(index)}>
                    <i className="fas fa-trash-alt"></i>
                  </Trash>
                </div>
                <div className="row">
                  <h6>Quantidade: {product.quantidade}</h6>
                  <span>R$ {product.price},00</span>
                </div>
              </div>
            </Orders>
            )}) : (
            <EmptyWrapper>
              <Empty src="/EmpyCart.svg"/>
              <EmptyText> Você não possui nenhum produto no carrinho!</EmptyText>
            </EmptyWrapper>
          )}
          
        </ModalContent>
        <ModalTotal>
          <span>subtotal: </span>
          <h5>R$ {value > 0 ? (`${value},00`) : ("0,00")}</h5>
          <hr />
        </ModalTotal>
        <ModalEnd>
          <Buy>Comprar Agora</Buy>
          <div className="row">
            <div>
              <i className="fas fa-caret-left"></i> Continuar Comprando
            </div>
            <hr />
            <div>
              Visualizar Carrinho <i className="fas fa-caret-right"></i>
            </div>
          </div>
        </ModalEnd>
      </Modal>
    </>
  );
};

export default Header;
