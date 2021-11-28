
import Tablerow from "./Tablerow";

const OrderTable = ({orders}) => {



    return (
        <table className="table text-left table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID đơn hàng</th>
            <th scope="col">Giá trị</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Ngày thanh toán</th>
          </tr>
        </thead>
        <tbody className=''>
          
          {
            orders.map((order, index) => {
                  return <Tablerow order={order} number = {index} 
                 
                  key={index}/>
              })
          }
        </tbody>
</table>
    )
}

export default OrderTable;