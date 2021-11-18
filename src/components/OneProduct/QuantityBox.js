import React from 'react';
import {Box, Button} from './QuantityBoxElement';

  function QuantityBox(props) {

        return (
            <Box>
              <Button className='dec' onClick={props.onDecrement}>–</Button>
              <Button className='quanty'>{props.qty}</Button>
              <Button className='inc' onClick={props.onIncrement}>+</Button>
            </Box>
          );
      }

  export default QuantityBox;