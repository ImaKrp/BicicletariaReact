import {
  CardWrapper,
  ImgBg,
  CardCont,
} from "./style";

 const Card = (props) => {
  const imagePath = `/Products/${props.product_id}.jpg`
  return (
    <>
      <CardWrapper>
        <ImgBg>
          <img src={imagePath} alt=""></img>
        </ImgBg>
        <CardCont>
          <div>
            <h3>{props.name}</h3>
            <h5>R$ {props.price}</h5>
          </div>
        </CardCont>
      </CardWrapper>
    </>
  );
};

export default Card;