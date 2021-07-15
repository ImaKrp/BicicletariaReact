import {
  Modal,
  ModalRow,
  ModalEnd,
  ModalContent,
  ModalTotal,
  Buy,
  Orders,
  Trash,
} from "./style";

const Header = (props) => {

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
    </>
  );
};

export default Header;
