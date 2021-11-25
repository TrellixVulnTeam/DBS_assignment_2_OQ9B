import { deleteProduct } from "../../api/services";


const Product = ({product, action}) => {

    const handleOnDelete = (event) => {
        console.log("132132");
        deleteProduct(product.id).then(
           result => action()
        );
        event.preventDefault();
    }

    return (
    <div className='p-1'>
        <div class="card">

            <div class="view overlay p-1">
                <img class="card-img-top img-thumbnail rounded img-responsive" src={product.imageURL}
                    alt="Card image cap" />
                {/* <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a> */}
            </div>

            <div class="card-body">


            <h4 class="card-title">{product.name}</h4>
            
            <div className='d-flex flex-column w-75 mx-auto'>
            <button className='btn bg-main text-white mb-1'><i class="fas fa-edit"></i></button>
            <button className='btn btn-danger' onClick={handleOnDelete}><i class="fas fa-trash-alt"></i></button>
            </div>
            </div>

        </div>
    </div>
    )
}

export default Product;