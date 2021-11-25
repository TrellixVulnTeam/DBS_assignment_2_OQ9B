


const ProductDetail = ({product}) => {

    
    return <div className='row m-0 p-0'>
        <div className = 'col-12'>
            <figure className="view overlay rounded z-depth-1 main-img">
                <img src={product.imageURL}
                className="img-fluid z-depth-1 border border-primary" />           
            </figure>
        </div>
        <div className='col-12 text'>
            <h5>{product.name}</h5>
            <p class="mb-2 text-muted text-uppercase small">{product.type}</p>
            <p><span class="mr-1"><strong>$12.99</strong></span></p>
            <p class="pt-1 text-left">{product.description}</p>
            <div class="table-responsive">
            <table class="table table-sm table-borderless mb-0">
                <tbody>
                    <tr>
                    <th class="pl-0 w-25" scope="row"><strong>Còn lại</strong></th>
                    <td>{product.amount}</td>
                    </tr>
                    <tr>
                    <th class="pl-0 w-25" scope="row"><strong>Đã mua</strong></th>
                    <td>2</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
}

export default ProductDetail;