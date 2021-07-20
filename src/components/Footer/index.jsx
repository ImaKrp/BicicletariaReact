import { BannerDiv, Column, Adress, Title, Left, SmallLink } from "./style";

const Footer = () => {
  return (
    <BannerDiv id="footer">
      <div>
        <Column>
          <Title>
            <h1>Sobre Nós</h1>
            <hr />
          </Title>
          <Left>
            A Bicicletaria oferece um novo estilo de vida para cada um de nossos
            clientes amigos.
          </Left>
        </Column>
        <Column>
          <Title>
            <h1>Atendimento</h1>
            <hr />
          </Title>
          <ul>
            <li>Telefone: (99) 9999-9999</li>
            <li>WhatsApp: (99) 99999-9999</li>
            <li>E-Mail: atendimento@granbikes.com.br</li>
          </ul>
        </Column>
        <Column>
          <Title>
            <h1>Redes Sociais</h1>
            <hr />
          </Title>
          <Left>
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
          </Left>
        </Column>
      </div>
      <Adress>
        <span>
          Avenida AAAAAAAAAAAAAAAA , 1111 - AAAAAAA - 111111-111 - AAAAAAAA / BR
        </span>
      </Adress>
    </BannerDiv>
  );
};

export default Footer;
