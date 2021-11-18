import React from 'react'
import { Window, Content, ClosedBtn} from './PopUpElement';


function PopUp(props) {

    return props.trigger ? (
        <Window>
            <Content>
                
                <div>Đã thêm vào giỏ hàng</div>
                <ClosedBtn onClick={() => props.setTrigger(false)}>OK</ClosedBtn>    
            </Content>    

        </Window>
    ) : "";
}

export default PopUp
