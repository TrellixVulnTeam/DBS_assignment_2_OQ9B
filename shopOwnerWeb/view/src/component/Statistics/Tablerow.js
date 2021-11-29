import { useNavigate } from "react-router";
import { deleteProduct } from "../../api/services";


const OrderRow = ({order, number}) => {

    const navigate = useNavigate();

   
    return (
        <tr>
      <th scope="row">{number + 1}</th>
        <td >{order.orderID}</td>
        <td>{order.totalPrice}</td>
        <td className={order.status !== 'CANCEL' ? 'text-primary' : 'text-danger'}>{order.status}</td>
        <td>{order.paymentTime}</td>
    </tr>
    )
}

export default OrderRow;


