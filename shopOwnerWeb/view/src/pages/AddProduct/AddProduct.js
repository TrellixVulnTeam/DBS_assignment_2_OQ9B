import {useRef} from 'react';
import { addProduct } from '../../api/services';
import { getUserID, getUser} from '../../utils/func';

const AddProduct = props => {

    const nameRef = useRef();
    const imageURLRef = useRef();
    const priceRef = useRef();
    const amountRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();

    const handleOnSubmit = async () => {

      const data = {
        ownerID: getUserID(),
        amount: amountRef.current.value,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        type: typeRef.current.value,
        imageURL: imageURLRef.current.value
      }
      
      await addProduct(data)
      .then(result => {
        amountRef.current.value = '';
        nameRef.current.value = '';
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        typeRef.current.value = '';
        imageURLRef.current.value = '';
      })
      .catch(error => console.log(error));
    }

    return (
      <div className='w-50 mx-auto p-5'>
        <div className='form-header'>
          <h2 className='text-info text-uppercase font-weight-bold'>Thêm mới sản phẩm</h2>
        </div>
        <form className='mt-5'>
          
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập tên sản phẩm" name='name' ref={nameRef} required/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập đường dẫn hình ảnh" name='imageURL' ref={imageURLRef} required/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập giá" name='price' ref={priceRef} required/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập số lượng" name='amount' ref={amountRef} required/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập loại sản phẩm" name='type' ref={typeRef} required/>
          </div>
          <div class="form-group d-flex flex-row">
            <textarea class="form-control" name='description' rows="3" ref={descriptionRef} required={true}></textarea>
          </div>
          <button type="button" class="btn btn-outline-info w-100 p-3 text-uppercase" onClick={handleOnSubmit}>Thêm</button>
        </form>
      </div>
    )
}

export default AddProduct;