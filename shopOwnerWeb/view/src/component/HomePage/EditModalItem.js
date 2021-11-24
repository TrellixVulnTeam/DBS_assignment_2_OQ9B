import { useEffect, useRef, useState } from "react";
import { updateProduct } from "../../api/services";
import { getUserID } from "../../utils/func";

const EditModalItem = ({item, action}) => {
    
  const [data, setData] = useState({
      ownerID: getUserID(),
      id: item.id,
      amount: item.amount,
      name: item.name,
      description: item.description,
      price: item.price,
      type: item.type,
      imageURL: item.imageURL
  })

  useEffect(() => {

    console.log(item.id);
    setData({
      ownerID: getUserID(),
      id: item.id,
      amount: item.amount,
      name: item.name,
      description: item.description,
      price: item.price,
      type: item.type,
      imageURL: item.imageURL
    });
  }, [item]);


  const handleOnChange = event => {
    
    data[event.target.name] = event.target.value;
    setData({...data});
  }

  const handleOnSubmit =(event) => {
    
    updateProduct(data).then(result => action());
    event.preventDefault();
  }
    
    return <div className="modal" id="editModalItem" >
    <div className="modal-dialog modal-lg">
      <div className="modal-content circle">
        <div className="modal-header">
          <h4 className="modal-title">CHỈNH SỬA SẢN PHẨM</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
            
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" 
              placeholder="Nhập tên sản phẩm" name='name' value={data.name} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" 
            placeholder="Nhập đường dẫn hình ảnh" name='imageURL' value={data.imageURL} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="number" className="form-control p-3 text-center" 
            placeholder="Nhập giá" name='price'  value={data.price} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="number" className="form-control p-3 text-center" 
            placeholder="Nhập số lượng" name='amount' value={data.amount} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" 
            placeholder="Nhập loại sản phẩm" name='type'  value={data.type} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <textarea className="form-control" name='description' rows="3" value={data.description} onChange={handleOnChange}></textarea>
          </div>
        </div>
        <div className="modal-footer">
            <button type='button' className='btn bg-main text-white w-25' onClick={handleOnSubmit}>Lưu</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Thoát</button>
        </div>
  
      </div>
    </div>
  </div>
}

export default EditModalItem;