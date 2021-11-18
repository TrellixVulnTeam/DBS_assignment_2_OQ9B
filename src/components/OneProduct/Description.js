import {Container, DesContainer, Des, Title} from "./DescriptionElement";

  function Description(props) {
    const {origin, brand, style, type, material, size,
            weight, accessories, insurance} = props.description;
    return (
      <Container>
      <Title>Thông số và mô tả sản phẩm</Title>
      <DesContainer>
        <Des> Xuât xứ: {origin} </Des> 
        <Des> Phụ kiện:  {accessories}</Des>
        <Des> Thương hiệu: {brand} </Des>
        <Des> Chất liệu: {material} </Des>
        <Des> Loại: {type} </Des>
        <Des> Cân nặng: {weight}</Des>
        <Des> Kiểu dáng: {style}</Des>   
        <Des> Bảo hành: {insurance}</Des> 
        <Des> Kích thước: {size}</Des> 
       </DesContainer>
       </Container>
    );
  }

  export default Description;