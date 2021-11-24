
import Tablerow from "./Tablerow";

const ProductTable = ({products, changeEditModalItem}) => {



    return (
        <table className="table text-left table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Loại sản phẩm</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng còn lại</th>
            <th scope="col">Chỉnh sửa</th>
            <th scope="col">Chi tiết</th>
            <th scope="col">Xóa</th>
          </tr>
        </thead>
        <tbody className=''>
          
          {
              products.map((product, index) => {
                  return <Tablerow product={product} number = {index} changeEditModalItem = {changeEditModalItem} key={index}/>
              })
          }
        </tbody>
</table>
    )
}

export default ProductTable;