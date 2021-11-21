import {useRef} from 'react';
import { addProduct } from '../../api/services';

const AddProduct = props => {

    const nameRef = useRef();
    const ownerIDRef = useRef();
    const imageURLRef = useRef();
    const priceRef = useRef();
    const amountRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();

    const handleOnSubmit = async () => {

      const data = {
        ownerID: ownerIDRef.current.value,
        amount: amountRef.current.value,
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        price: priceRef.current.value,
        type: typeRef.current.value,
        imageURL: imageURLRef.current.value
      }

      await addProduct(data)
      .then(result => {
        ownerIDRef.current.value = '';
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
          <h2 className='text-info text-uppercase'>Thêm mới sản phẩm</h2>
        </div>
        <form className='mt-5'>
          <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập ID của chủ cửa hàng" ref={ownerIDRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập tên sản phẩm" name='name' ref={nameRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập đường dẫn hình ảnh" name='imageURL' ref={imageURLRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập giá" name='price' ref={priceRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập số lượng" name='amount' ref={amountRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập loại sản phẩm" name='type' ref={typeRef}/>
          </div>
          <div class="form-group d-flex flex-row">
            <textarea class="form-control" name='description' rows="3" ref={descriptionRef}></textarea>
          </div>
          <button type="button" class="btn btn-outline-info w-100 p-3 text-uppercase" onClick={handleOnSubmit}>Thêm</button>
        </form>
      </div>
    )
}

export default AddProduct;