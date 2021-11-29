import {useEffect, useRef, useState} from 'react';
import { addProduct } from '../../api/services';
import { getUserID} from '../../utils/func';

const AddProduct = props => {

    // const nameRef = useRef();
    // const imageURLRef = useRef();
    // const priceRef = useRef();
    // const amountRef = useRef();
    // const typeRef = useRef();
    // const descriptionRef = useRef();
    const RUNNING = "ĐANG CHẠY";
    const FAIL = "THẤT BẠI";
    const SUCCESS = "THÀNH CÔNG";
    const [statusText, setStatusText] = useState("ĐANG CHẠY");
    const [warningText, setWarningText] = useState("");

    const [data, setData] = useState({

      ownerID: getUserID(),
      amount: "",
      name: "",
      description: "",
      price: "",
      type: "",
      imageURL: ""

    });

    useEffect(() => {

      setStatusText(RUNNING);

    }, []);

    
    const handleOnSubmit =  () => {

      if (validateData()) {
        addProduct(data)
        .then(result => {
          if (result)
          { 
            setStatusText(SUCCESS);
            setWarningText("");
          }
          else {

          }
        })
        .catch(error => setStatusText(FAIL));
        }
      else {
        setStatusText("GIÁ TRỊ KHÔNG HỢP LỆ");
      }
    };

    const validateData = () => {

      console.log(data);
      if (data.name === "" || data.type === "" || data.description === "" || data.price === "" 
        || data.imageURL === "" ||  data.name === "") {
        setWarningText("Không được để trống!");
        return false;
      }
      else if (data.price < 0 || data.amount < 0)
      {
        setWarningText("GIÁ TRỊ SỐ KHÔNG HỢP LỆ");
        return false;
      }
      setWarningText("");
      return true;
    }

    const handleOnChange = async event => {

       

        data[event.target.name] = event.target.value;
        setData({...data});
        validateData();
             
    }

    return (
      <div className='w-50 mx-auto p-5'>
        <div className='form-header'>
          <h2 className='text-info text-uppercase font-weight-bold'>Thêm mới sản phẩm</h2>
        </div>
        <form className='mt-5'>
          
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" placeholder="Nhập tên sản phẩm" name='name' defaultValue={data.name}  onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" placeholder="Nhập đường dẫn hình ảnh" name='imageURL' defaultValue={data.imageURL}  onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="number" className="form-control p-3 text-center" placeholder="Nhập giá" name='price' defaultValue={data.price} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="number" className="form-control p-3 text-center" placeholder="Nhập số lượng" name='amount' defaultValue={data.amount} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <input type="text" className="form-control p-3 text-center" placeholder="Nhập loại sản phẩm" name='type' defaultValue={data.type} onChange={handleOnChange}/>
          </div>
          <div className="form-group d-flex flex-row">
            <textarea className="form-control" name='description' rows="3" defaultValue={data.description} onChange={handleOnChange} ></textarea>
          </div>
          <p className='text-danger text-uppercase'>{warningText}</p>
          <button type="button" className="btn btn-outline-info w-100 p-3 text-uppercase" 
          data-toggle="modal" data-target="#statusModal"
          onClick={handleOnSubmit}>Thêm</button>
        </form>

        <div className="modal fade" id="statusModal" tabindex="-1" aria-labelledby="statusModal" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="statusModal">TRẠNG THÁI</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body text-uppercase">
                {statusText}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                {
                  statusText === FAIL ? <button type="button" className="btn btn-danger">THỬ LẠI</button> : null
                }
              </div>
            </div>  
          </div>
      </div>
        
      </div>
    )
}

export default AddProduct;