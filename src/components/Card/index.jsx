import { CardWrapper, Img, CardCont } from "./style";
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
            <a href={`/produtos/${props.id}`}>Detalhes</a>
            {props.children}
          </div>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};

export default Card;
