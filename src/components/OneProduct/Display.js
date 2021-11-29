import React, { useState } from 'react';
import QuantityBox from './QuantityBox';
import { Link } from "react-router-dom";
import { Container, ProImg, InfoSection, NormalBtn, BtnContainer } from './DisplayElement';
import PopUp from './PopUp';
import { AddToCart } from '../../pages/cart';
import priceWithDots from '../products/priceWithDots';
import axios from 'axios';
function ProInfo(props) {
  //url to product  

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      AddToCart({ id: id, img: imageURL, name: name, price: price })
      axios.post('http://localhost:5000/payment/productInCart', { id: id, img: imageURL, name: name, price: price })
    }
    setAddToCart(true);
  }

  const closePopUp = () => {
    setAddToCart(false);
  }

  const onDecrement = () => {
    if (quantity <= 1) return;
    setQuantiy(quantity - 1);
  }

  const onIncrement = () => {
    setQuantiy(quantity + 1);
  }

  const [addToCart, setAddToCart] = useState(false);
  const [quantity, setQuantiy] = useState(1);
  const { id, imageURL, name, price } = props.display;

  return (
    <React.Fragment>
      <h1 className="text-capitalize mx-5" style={{ fontWeight: 1000, position: 'relative', left: 300, top: 20 }}>{name}</h1>
      <Container>
        <ProImg src={imageURL} alt='product img' />
        <InfoSection>
          <h1 className='pro_name'>Tên sản phẩm: {name}</h1>
          <p className='pro_price'>Giá: {priceWithDots(price)} VND</p>
          <p className='quantity-section'>Số lượng</p>
          <QuantityBox qty={quantity} onDecrement={onDecrement} onIncrement={onIncrement} />

          <BtnContainer>
            <NormalBtn >
              <Link to='/payment' style={{ textDecoration: 'none', color: 'black' }}> Mua ngay </Link>
            </NormalBtn>
            <NormalBtn onClick={handleAddToCart}>Thêm vào giỏ hàng</NormalBtn>
          </BtnContainer>
          <PopUp trigger={addToCart} setTrigger={closePopUp}></PopUp>

        </InfoSection>
      </Container>
    </React.Fragment>

  );
}

export default ProInfo;
