import { useRef } from "react";



const EditModalItem = ({item}) => {
    
    
    const nameRef = useRef();
    const ownerIDRef = useRef();
    const imageURLRef = useRef();
    const priceRef = useRef();
    const amountRef = useRef();
    const typeRef = useRef();
    const descriptionRef = useRef();
    
    return <div className="modal" id="editModalItem" >
    <div className="modal-dialog modal-lg">
      <div className="modal-content circle">
        <div className="modal-header">
          <h4 className="modal-title">CHỈNH SỬA SẢN PHẨM</h4>
          <button type="button" className="close" data-dismiss="modal">&times;</button>
        </div>
        <div className="modal-body">
            {/* <div class="form-group d-flex flex-row">
            <input type="number" class="form-control p-3 text-center" placeholder="Nhập ID của chủ cửa hàng" ref={ownerIDRef}/>
          </div> */}
          <div class="form-group d-flex flex-row">
            <input type="text" class="form-control p-3 text-center" placeholder="Nhập tên sản phẩm" name='name' ref={nameRef} defaultValue={item.name}/>
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
        </div>
        <div className="modal-footer">
            <button type='button' className='btn bg-main text-white w-25'>Lưu</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Thoát</button>
        </div>
  
      </div>
    </div>
  </div>
}

export default EditModalItem;