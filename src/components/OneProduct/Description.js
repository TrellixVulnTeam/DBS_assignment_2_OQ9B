import { Container, DesContainer, Des, Title } from "./DescriptionElement";

function Description(props) {
  const { type, description } = props.description;
  return (
    <Container>
      <Title>Description</Title>
      <DesContainer>
        <Des>Loại: {type}</Des>
        <Des>Mô tả: {description}</Des>
      </DesContainer>
    </Container>
  );
}

export default Description;