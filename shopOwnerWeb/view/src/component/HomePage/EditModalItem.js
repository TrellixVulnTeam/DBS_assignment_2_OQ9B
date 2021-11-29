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
  });

  const [submitStatus, setStatus] = useState("");
  

  useEffect(() => {

    setStatus("");
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


  const validateData = () => {

    if (data.name === "" || data.type === "" || data.description === "" || data.price === "" 
      || data.imageURL === "" ||  data.name === "") {
        setStatus("Không được để trống!");
      return false;
    }
    else if (data.price < 0 || data.amount < 0)
    {
      setStatus("GIÁ TRỊ SỐ KHÔNG HỢP LỆ");
      return false;
    }
    setStatus("");
    return true;
  }

  const handleOnChange = event => {
    
    data[event.target.name] = event.target.value;
    setData({...data});
    validateData();
  }

  const handleOnSubmit =(event) => {
    
    if (validateData()) {
      updateProduct(data)
      .then(result => 
      {
        action();
        console.log(result);
        setStatus(result.data.message);
      })
      .catch(error => {
        setData(error.data.message);
      }) 
      ;
    } else {
      
    }
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
          <span className='text-danger text-uppercase' style={{fontSize:"1.5rem"}}>{submitStatus}</span>
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