import {
  CardWrapper,
  Img,
  CardCont,
} from "./style";

 const Card = (props) => {
  return (
    <>
      <CardWrapper>
        <Img src={`/Products/${props.id}.jpg`} />
        <CardCont>
          <div>
            <h3>{props.name}</h3>
            <h5>R$ {props.price}</h5>
            <a href={`/produtos/${props.id}`}>Detalhes</a>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};

export default Card;