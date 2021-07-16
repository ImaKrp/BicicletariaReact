import { useCart } from "../../hooks/useCart";
import { CardWrapper, Img, CardCont } from "./style";

const Card = (props) => {
  const { addItemsToCart } = useCart();
  function addProduct(produto) {
    addItemsToCart(produto);
  }
  return (
    <>
      <CardWrapper>
        <Img src={`/Products/${props.id}.jpg`} />
        <CardCont>
          <div>
            <h3>{props.name}</h3>
            <h5>R$ {props.price},00</h5>
            <div className="buttons">
            <a href={`/produtos/${props.id}`}>Detalhes</a>
            <button onClick={() => addProduct(props)}>Comprar</button>
          </div>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};

export default Card;
