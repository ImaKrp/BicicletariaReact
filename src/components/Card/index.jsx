import { CardWrapper, Img, CardCont } from "./style";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <CardWrapper>
        <Img src={`/Products/${props.id}.jpg`} />
        <CardCont>
          <div>
            <h3>{props.name}</h3>
            <h5>R$ {props.price},00</h5>
            <div className="buttons">
              <Link className="link" to={`/produtos/${props.id}`}>Detalhes</Link>
              {props.children}
            </div>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};

export default Card;
