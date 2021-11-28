
const ProductDetail = ({product, orders}) => {

    
    console.log(orders);

    return <div className='row m-0 p-0'>
        <div className = 'col-12'>
            <figure className="view overlay rounded z-depth-1 main-img">
                <img src={product.imageURL}
                className="img-fluid z-depth-1 border border-primary" alt=""/>           
            </figure>
        </div>
        <div className='col-12 text'>
            <h5>{product.name}</h5>
            <p className="mb-2 text-muted text-uppercase small">{product.type}</p>
            <p><span className="mr-1"><strong>$12.99</strong></span></p>
            <p className="pt-1 text-left">{product.description}</p>
            <div className="table-responsive">
            <table className="table table-sm table-borderless mb-0">
                <tbody>
                    <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Còn lại</strong></th>
                    <td>{product.amount}</td>
                    </tr>
                    <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Đã mua</strong></th>
                    <td>{orders.length}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </div>
}

export default ProductDetail;