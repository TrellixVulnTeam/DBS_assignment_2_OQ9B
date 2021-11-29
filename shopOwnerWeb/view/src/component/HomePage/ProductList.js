import Product from "./Product";


const ProductList = ({products}) => {




    return <div className='row'>

        {
            products.map((product, index) => <div className='col-10 col-sm-12 col-md-6 col-xl-4 p-2' key={index}>
            <Product product = {product}/>
        </div>)
        }
        
        
    </div>
}


export default ProductList;